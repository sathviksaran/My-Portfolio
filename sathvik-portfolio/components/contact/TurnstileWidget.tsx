"use client";

import { useEffect, useState } from "react";
import Turnstile from "react-turnstile";

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
  onExpire: () => void;
  onError: () => void;
}

export default function TurnstileWidget({
  onVerify,
  onExpire,
  onError,
}: TurnstileWidgetProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center">
      <Turnstile
        sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
        theme="auto"
        onVerify={onVerify}
        onExpire={onExpire}
        onError={onError}
      />
    </div>
  );
}