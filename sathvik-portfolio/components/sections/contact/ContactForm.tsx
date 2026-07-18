"use client";

import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import GlassCard from "@/components/ui/GlassCard";
import SubmitButton from "./SubmitButton";

import ContactField from "./ContactField";
import ContactTextarea from "./ContactTextArea";
import ContactStatus from "./ContactStatus";

import {
  contactSchema,
  type ContactFormData,
} from "@/lib/validations/contact/contactSchema";

import type { ContactStatusState } from "@/types/contact";

import { sendContactForm } from "@/app/api/contact/contact";
import TurnstileWidget from "./TurnstileWidget";


export default function ContactForm() {
  const [status, setStatus] =
  useState<ContactStatusState | null>(null);

  const [token, setToken] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const message = useWatch({ control, name: "message" })

  useEffect(() => {
    if (status?.type !== "success") return;

    const timer = setTimeout(() => {
      setStatus(null);
    }, 5000);

    return () => clearTimeout(timer);
  }, [status]);

  async function onSubmit(data: ContactFormData) {
  setStatus(null);

  if (!token) {
    setStatus({
      type: "error",
      message: "Please complete the CAPTCHA verification.",
    });
    return;
  }

  try {
    const result = await sendContactForm({
      ...data,
      token,
    });

    setStatus({
      type: "success",
      message: result.message,
    });

    reset();
    setToken("");
  } catch (error) {
    setStatus({
      type: "error",
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
    });
  }
}

  return (
    <GlassCard className="p-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <fieldset disabled={isSubmitting} className="space-y-5">

        <ContactField
          label="Name"
          required
          placeholder="John Doe"
          autoComplete="name"
          registration={register("name")}
          error={errors.name}
        />

        <ContactField
          label="Email"
          type="email"
          required
          placeholder="john@example.com"
          autoComplete="email"
          registration={register("email")}
          error={errors.email}
        />

        <ContactField
          label="Phone"
          type="tel"
          placeholder="+91 9876543210"
          autoComplete="tel"
          registration={register("phone")}
          error={errors.phone}
        />

        <ContactField
          label="Subject"
          required
          placeholder="Project Inquiry"
          registration={register("subject")}
          error={errors.subject}
        />

        <ContactTextarea
  label="Message"
  registration={register("message")}
  error={errors.message}
  required
  maxLength={500}
  currentLength={message?.length ?? 0}
  placeholder="Tell me about your project..."
/>

<TurnstileWidget
  onSuccess={setToken}
  onExpire={() => setToken("")}
  onError={() => setToken("")}
/>

        <ContactStatus status={status} />

        <SubmitButton
  status={
    isSubmitting
      ? "loading"
      : status?.type === "success"
      ? "success"
      : "idle"
  }
/>
</fieldset>
      </form>
    </GlassCard>
  );
}