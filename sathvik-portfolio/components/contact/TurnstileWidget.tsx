"use client";

import dynamic from "next/dynamic";

const Turnstile = dynamic(
  () => import("react-turnstile"),
  {
    ssr: false,
  }
);

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
  return (
    <div className="flex justify-center">
      <Turnstile
        sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
        onVerify={onVerify}
        onExpire={onExpire}
        onError={onError}
        theme="auto"
      />
    </div>
  );
}