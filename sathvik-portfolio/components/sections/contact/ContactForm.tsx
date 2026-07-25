"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import GlassCard from "@/components/ui/GlassCard";
import SubmitButton from "./SubmitButton";
import ContactField from "./ContactField";
import ContactTextarea from "./ContactTextArea";
import ContactStatus from "./ContactStatus";
import TurnstileWidget from "./TurnstileWidget";
import ContactSuccess from "./ContactSuccess";

import {
  contactSchema,
  type ContactFormData,
} from "@/lib/validations/contact/contactSchema";

import type { ContactStatusState } from "@/types/contact";

import { sendContactForm } from "@/app/api/contact/contact";

export default function ContactForm() {
  const [status, setStatus] =
    useState<ContactStatusState | null>(null);

  const [token, setToken] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [captchaResetKey, setCaptchaResetKey] = useState(0);

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

  const message = useWatch({
    control,
    name: "message",
  });

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
      await sendContactForm({
  ...data,
  token,
});

setSubmittedName(data.name);

reset();
setToken("");
setCaptchaResetKey((value) => value + 1);
setSubmitted(true);
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

  if (submitted) {
  return (
    <GlassCard className="p-8">
      <ContactSuccess
        name={submittedName}
        onReset={() => {
          setSubmitted(false);
          setSubmittedName("");
          setStatus(null);
        }}
      />
    </GlassCard>
  );
}

  return (
    <GlassCard className="p-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <fieldset
          disabled={isSubmitting}
          className="space-y-5"
        >
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
            resetKey={captchaResetKey}
            onSuccess={setToken}
            onExpire={() => setToken("")}
            onError={() => setToken("")}
          />

          <ContactStatus status={status} />

          <SubmitButton
            status={isSubmitting ? "loading" : "idle"}
          />
        </fieldset>
      </form>
    </GlassCard>
  );
}