import { NextRequest, NextResponse } from "next/server";

import { resend } from "@/lib/resend";
import { verifyTurnstile } from "@/lib/turnstile";
import { contactSchema } from "@/lib/validations/contact/contactSchema";

import ContactNotification from "@/emails/ContactNotification";
import ContactConfirmation from "@/emails/ContactConfirmation";
import { env } from "@/lib/env.server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

if (!body || typeof body !== "object") {
  return NextResponse.json(
    {
      success: false,
      message: "Invalid request body.",
    },
    {
      status: 400,
    }
  );
}

const { token, ...contactData } = body;

    // Validate request
    const validated = contactSchema.safeParse(contactData);

    if (!validated.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed.",
          errors: validated.error.flatten(),
        },
        {
          status: 400,
        }
      );
    }

    // Verify Turnstile
    const isHuman = await verifyTurnstile(
      token,
      req.headers.get("x-forwarded-for") ?? undefined
    );

    if (!isHuman) {
      return NextResponse.json(
        {
          success: false,
          message: "Turnstile verification failed.",
        },
        {
          status: 403,
        }
      );
    }

    const {
      name,
      email,
      phone,
      subject,
      message,
    } = validated.data;

    const [notificationResult, confirmationResult] =
      await Promise.all([
        resend.emails.send({
          from: env.EMAIL_FROM,

          to: env.CONTACT_EMAIL,

          replyTo: email,

          subject: `📩 ${subject}`,

          react: ContactNotification({
            name,
            email,
            phone,
            subject,
            message,
          }),
        }),

        resend.emails.send({
          from: env.EMAIL_REPLY_FROM,

          to: email,

          subject: "Thank you for contacting me!",

          react: ContactConfirmation({
            name,
          }),
        }),
      ]);

    if (
      notificationResult.error ||
      confirmationResult.error
    ) {
      console.error(
        "Resend Error:",
        notificationResult.error ??
          confirmationResult.error
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Failed to send email. Please try again later.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
  {
    success: true,
    message: "Email sent successfully.",
  },
  {
    status: 200,
    headers: {
      "Cache-Control": "no-store",
    },
  }
);
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while sending the email.",
      },
      {
        status: 500,
      }
    );
  }
}