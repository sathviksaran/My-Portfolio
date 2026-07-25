"use client";

import { useEffect, useRef, useState } from "react";
import {
  Turnstile,
  type TurnstileInstance,
} from "@marsidev/react-turnstile";

import { env } from "@/lib/env.client";

interface TurnstileWidgetProps {
  onSuccess: (token: string) => void;
  onExpire: () => void;
  onError: () => void;
  resetKey?: number;
  className?: string;
}

export default function TurnstileWidget({
  onSuccess,
  onExpire,
  onError,
  resetKey,
  className = "flex justify-center",
}: TurnstileWidgetProps) {
  const [mounted, setMounted] = useState(false);
  const turnstileRef = useRef<TurnstileInstance>(null);

  useEffect(() => {
  turnstileRef.current?.reset();
}, [resetKey]);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) {
    return null;
  }

  if (!env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) {
  return <p>Turnstile is not configured.</p>;
}

  return (
    <div className={className}>
      <Turnstile
        ref={turnstileRef}
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