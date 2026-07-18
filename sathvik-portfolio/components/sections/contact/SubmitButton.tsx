"use client";

import { CheckCircle2, Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/Button";

export type SubmitStatus =
  | "idle"
  | "loading"
  | "success";

interface SubmitButtonProps {
  status: SubmitStatus;
}

export default function SubmitButton({
  status,
}: SubmitButtonProps) {
  const isLoading = status === "loading";
  const isSuccess = status === "success";
  const isDisabled = isLoading || isSuccess;

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
            aria-hidden="true"
          />
          Sending...
        </>
      ) : isSuccess ? (
        <>
          <CheckCircle2
            className="mr-2 h-5 w-5"
            aria-hidden="true"
          />
          Message Sent
        </>
      ) : (
        <>
          <Send
            className="mr-2 h-5 w-5"
            aria-hidden="true"
          />
          Send Message
        </>
      )}
    </Button>
  );
}