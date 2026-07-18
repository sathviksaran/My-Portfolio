import { requiredEnv } from "./requiredEnv";

export const env = {
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: requiredEnv(
    "NEXT_PUBLIC_TURNSTILE_SITE_KEY"
  ),
} as const;