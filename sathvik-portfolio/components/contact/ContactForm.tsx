"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import toast from "react-hot-toast";

import {
  User,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  contactSchema,
  ContactFormData,
} from "@/lib/contactSchema";

import SubmitButton from "./SubmitButton";
import SuccessBanner from "./SuccessBanner";
import TurnstileWidget from "./TurnstileWidget";

export default function ContactForm() {
  const [token, setToken] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const [showSuccess, setShowSuccess] =
    useState(false);

  const {
  register,
  handleSubmit,
  reset,
  watch,
  formState: {
    errors,
    isSubmitting,
  },
} = useForm<ContactFormData>({
  resolver: zodResolver(contactSchema),
});

const message = watch("message") ?? "";

  async function onSubmit(
    data: ContactFormData
  ) {
    if (!token) {
      toast.error(
        "Please complete the verification."
      );
      return;
    }

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            ...data,
            token,
          }),
        }
      );

      const result =
        await response.json();

      if (!response.ok) {
        throw new Error(
          result.error ||
            "Something went wrong."
        );
      }

      toast.success(
        "Message sent successfully!"
      );

      setSubmitted(true);

      setShowSuccess(true);

      reset();

      setToken("");

      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

      setTimeout(() => {
        setSubmitted(false);
      }, 30000);

    } catch (error) {
      console.error(error);

      toast.error(
        "Unable to send your message."
      );
    }
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
          backdrop-blur-2xl
          shadow-2xl
        "
      >
        <SuccessBanner
          show={showSuccess}
        />

        <form
          onSubmit={handleSubmit(
            onSubmit
          )}
          className="space-y-6"
        >

          {/* Name */}

          <div>

            <label className="mb-2 block font-medium">
              Your Name
            </label>

            <div className="relative">

              <User
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-500
                "
              />

              <Input
                {...register("name")}
                autoComplete="name"
                placeholder="John Doe"
                className="h-12 pl-11"
              />

            </div>

            {errors.name && (

              <p className="mt-2 text-sm text-red-500">
                {errors.name.message}
              </p>

            )}

          </div>

          {/* Email */}

          <div>

            <label className="mb-2 block font-medium">
              Email Address
            </label>

            <div className="relative">

              <Mail
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-500
                "
              />

              <Input
                type="email"
                autoComplete="email"
                placeholder="john@example.com"
                {...register("email")}
                className="h-12 pl-11"
              />

            </div>

            {errors.email && (

              <p className="mt-2 text-sm text-red-500">
                {errors.email.message}
              </p>

            )}

          </div>
                    {/* Phone */}

          <div>
            <label className="mb-2 block font-medium">
              Phone Number (Optional)
            </label>

            <div className="relative">
              <Phone
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-500
                "
              />

              <Input
                type="tel"
                autoComplete="tel"
                placeholder="+91 9876543210"
                {...register("phone")}
                className="
                  h-12
                  pl-11
                  rounded-xl
                  border-white/10
                  bg-background/50
                "
              />
            </div>

            {errors.phone && (
              <p className="mt-2 text-sm text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Subject */}

          <div>
            <label className="mb-2 block font-medium">
              Subject
            </label>

            <div className="relative">
              <MessageSquare
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-500
                "
              />

              <Input
                placeholder="Job Opportunity"
                {...register("subject")}
                className="
                  h-12
                  pl-11
                  rounded-xl
                  border-white/10
                  bg-background/50
                "
              />
            </div>

            {errors.subject && (
              <p className="mt-2 text-sm text-red-500">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message */}

          <div>
            <label className="mb-2 block font-medium">
              Message
            </label>

            <Textarea
              rows={7}
              maxLength={1000}
              placeholder="Tell me about your project..."
              {...register("message")}
              className="
                resize-none
                rounded-xl
                border-white/10
                bg-background/50
              "
            />

            <div className="mt-2 flex items-center justify-between">
              {errors.message ? (
                <p className="text-sm text-red-500">
                  {errors.message.message}
                </p>
              ) : (
                <span />
              )}

              <p
  className={`text-xs transition-colors ${
    message.length >= 1000
      ? "text-red-500"
      : message.length >= 900
      ? "text-orange-500"
      : "text-slate-500"
  }`}
>
  {message.length} / 1000
</p>
            </div>
          </div>

          {/* Cloudflare Turnstile */}

          <TurnstileWidget
            onVerify={(token) => setToken(token)}
            onExpire={() => setToken("")}
            onError={() => {
              setToken("");
              toast.error(
                "Verification expired. Please verify again."
              );
            }}
          />

          {/* Submit Button */}

          <SubmitButton
            loading={isSubmitting}
            submitted={submitted}
          />
                  </form>
      </div>
    </motion.div>
  );
}