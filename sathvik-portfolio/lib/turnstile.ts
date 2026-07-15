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
  if (!process.env.TURNSTILE_SECRET_KEY) {
    throw new Error("TURNSTILE_SECRET_KEY is not configured.");
  }

  if (!token) {
    return false;
  }

  const formData = new FormData();

  formData.append(
    "secret",
    process.env.TURNSTILE_SECRET_KEY
  );

  formData.append("response", token);

  if (ip) {
    formData.append("remoteip", ip);
  }

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Failed to verify Turnstile.");
  }

  const data =
    (await response.json()) as TurnstileResponse;

  return data.success;
}