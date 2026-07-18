"use client";

import { useEffect, useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

import { env } from "@/lib/env.client";

interface TurnstileWidgetProps {
  onSuccess: (token: string) => void;
  onExpire: () => void;
  onError: () => void;
  className?: string;
}

export default function TurnstileWidget({
  onSuccess,
  onExpire,
  onError,
  className = "flex justify-center",
}: TurnstileWidgetProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={className}>
      <Turnstile
        siteKey={env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
        options={{
          theme: "auto",
        }}
        onSuccess={onSuccess}
        onExpire={onExpire}
        onError={onError}
      />
    </div>
  );
}