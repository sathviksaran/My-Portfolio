"use client";

import { useState } from "react";
import { Send } from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";
import GradientButton from "@/components/ui/GradientButton";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus(null);

    if (
      !form.name ||
      !form.email ||
      !form.subject ||
      !form.message
    ) {
      setStatus({
        type: "error",
        message: "Please fill in all fields.",
      });
      return;
    }

    setLoading(true);

    try {
      // TODO:
      // await fetch("/api/contact", { ... })

      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus({
        type: "success",
        message: "Your message has been sent successfully!",
      });

      setForm(initialForm);
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <GlassCard className="p-8">
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <Input
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <Input
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <Input
          label="Subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
        />

        <div>
          <label className="mb-2 block text-sm font-medium">
            Message
          </label>

          <textarea
            rows={6}
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 outline-none transition focus:border-blue-500 dark:border-slate-700"
          />
        </div>

        {status && (
          <p
            className={
              status.type === "success"
                ? "text-green-500"
                : "text-red-500"
            }
          >
            {status.message}
          </p>
        )}

        <GradientButton
          type="submit"
          loading={loading}
          icon={<Send size={18} />}
          className="w-full"
        >
          Send Message
        </GradientButton>
      </form>
    </GlassCard>
  );
}

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function Input({ label, ...props }: InputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">
        {label}
      </label>

      <input
        {...props}
        className="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 outline-none transition focus:border-blue-500 dark:border-slate-700"
      />
    </div>
  );
}