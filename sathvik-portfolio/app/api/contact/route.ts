import { NextRequest, NextResponse } from "next/server";

import { resend } from "@/lib/resend";
import { verifyTurnstile } from "@/lib/turnstile";
import { contactSchema } from "@/lib/contactSchema";

import ContactNotification from "@/emails/ContactNotification";
import ContactConfirmation from "@/emails/ContactConfirmation";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      token,
      name,
      email,
      phone,
      subject,
      message,
    } = body;

    // Verify Turnstile
    const isHuman = await verifyTurnstile(
      token,
      req.headers.get("x-forwarded-for") ?? undefined
    );

    if (!isHuman) {
      return NextResponse.json(
        {
          success: false,
          error: "Turnstile verification failed.",
        },
        {
          status: 400,
        }
      );
    }

    // Validate Request
    const validated = contactSchema.safeParse({
      name,
      email,
      phone,
      subject,
      message,
    });

    if (!validated.success) {
      return NextResponse.json(
        {
          success: false,
          error: validated.error.flatten(),
        },
        {
          status: 400,
        }
      );
    }

    // Send notification email to you
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",

      to: "atchukolus@gmail.com",

      replyTo: email,

      subject: `📩 ${subject}`,

      react: ContactNotification({
        name,
        email,
        phone,
        subject,
        message,
      }),
    });

    // Send confirmation email to visitor
    await resend.emails.send({
      from: "Sathvik Saran <onboarding@resend.dev>",

      to: email,

      subject:
        "Thank you for contacting me!",

      react: ContactConfirmation({
        name,
      }),
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully.",
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error:
          "Something went wrong while sending the email.",
      },
      {
        status: 500,
      }
    );
  }
}