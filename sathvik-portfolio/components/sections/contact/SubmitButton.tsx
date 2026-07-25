"use client";

import { CheckCircle2, Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/Button";

export type SubmitStatus =
  | "idle"
  | "loading";

interface SubmitButtonProps {
  status: SubmitStatus;
}

export default function SubmitButton({
  status,
}: SubmitButtonProps) {
  const isLoading = status === "loading";
  const isDisabled = isLoading;

  return (
    <Button
      type="submit"
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={isLoading}
      className="
        h-12
        w-full
        rounded-xl
        bg-gradient-to-r
        from-blue-600
        via-cyan-500
        to-indigo-600
        font-semibold
        text-white
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:shadow-lg
        hover:shadow-cyan-500/30
        disabled:cursor-not-allowed
        disabled:opacity-70
      "
    >
      {isLoading ? (
        <>
          <Loader2
            className="mr-2 h-5 w-5 animate-spin"
          />
          <span aria-live="polite">Sending...</span>
        </>
      ) : (
        <>
          <Send
            className="mr-2 h-5 w-5"
          />
          <span aria-live="polite">Send Message</span>
        </>
      )}
    </Button>
  );
}