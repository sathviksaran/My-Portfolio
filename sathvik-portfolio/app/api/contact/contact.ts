import type { ContactFormData } from "@/lib/validations/contact/contactSchema";

export interface ContactRequest extends ContactFormData {
  token: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

export async function sendContactForm(
  data: ContactRequest
): Promise<ContactResponse> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  let result: ContactResponse;

  try {
    result = (await response.json()) as ContactResponse;
  } catch {
    throw new Error("Invalid server response.");
  }

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result;
}