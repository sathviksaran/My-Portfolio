"use client";

import { CheckCircle2 } from "lucide-react";
import GradientButton from "@/components/ui/GradientButton";

interface ContactSuccessProps {
  name?: string;
  onReset: () => void;
}


export default function ContactSuccess({
  name,
  onReset,
}: ContactSuccessProps) {
  return (
    <div className="flex flex-col items-center text-center py-12">
      <CheckCircle2 className="h-20 w-20 text-green-500" />

      <h2 className="mt-6 text-3xl font-bold">
        Thank You{name ? `, ${name}` : ""}!
      </h2>

      <p className="mt-4 max-w-lg text-slate-600 dark:text-slate-300">
        Your message has been sent successfully.
        <br />
        I&apos;ll review it and get back to you as soon as possible.
      </p>

      <GradientButton
        className="mt-8"
        onClick={onReset}
      >
        Send Another Message
      </GradientButton>
    </div>
  );
}