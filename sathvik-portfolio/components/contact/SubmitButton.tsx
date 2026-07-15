"use client";

import { Loader2, Send, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/Button";

interface SubmitButtonProps {
  loading: boolean;
  submitted: boolean;
}

export default function SubmitButton({
  loading,
  submitted,
}: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      disabled={loading || submitted}
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
      {loading ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Sending...
        </>
      ) : submitted ? (
        <>
          <CheckCircle2 className="mr-2 h-5 w-5" />
          Message Sent
        </>
      ) : (
        <>
          <Send className="mr-2 h-5 w-5" />
          Send Message
        </>
      )}
    </Button>
  );
}