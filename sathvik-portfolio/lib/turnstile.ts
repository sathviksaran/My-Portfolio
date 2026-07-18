import { env } from "@/lib/env.server";

interface TurnstileResponse {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
}

export async function verifyTurnstile(
  token: string,
  ip?: string
): Promise<boolean> {
  if (!token) {
    return false;
  }

  const formData = new FormData();

  formData.append("secret", env.TURNSTILE_SECRET_KEY);
  formData.append("response", token);

  if (ip) {
    formData.append("remoteip", ip);
  }

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: formData,
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to verify Turnstile.");
  }

  const data: TurnstileResponse = await response.json();

  if (!data.success) {
    console.error(
      "Turnstile verification failed:",
      data["error-codes"]
    );
  }

  return data.success;
}