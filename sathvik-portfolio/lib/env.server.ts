import { requiredEnv } from "./requiredEnv";

export const env = {
  RESEND_API_KEY: requiredEnv("RESEND_API_KEY"),
  CONTACT_EMAIL: requiredEnv("CONTACT_EMAIL"),
  EMAIL_FROM: requiredEnv("EMAIL_FROM"),
  EMAIL_REPLY_FROM: requiredEnv("EMAIL_REPLY_FROM"),
  TURNSTILE_SECRET_KEY: requiredEnv("TURNSTILE_SECRET_KEY"),
} as const;