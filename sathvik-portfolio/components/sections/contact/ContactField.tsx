"use client";

import type { InputHTMLAttributes } from "react";
import type {
  FieldError,
  UseFormRegisterReturn,
} from "react-hook-form";

import { cn } from "@/lib/utils";

interface ContactFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "name"> {
  label: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
}

export default function ContactField({
  label,
  registration,
  error,
  className,
  id,
  required,
  ...props
}: ContactFieldProps) {
  const inputId = id ?? registration.name;
  const errorId = `${inputId}-error`;

  return (
    <div className="space-y-2">
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-slate-700 dark:text-slate-300"
      >
        {label}

        {required && (
          <span
            aria-hidden="true"
            className="ml-1 text-red-500"
          >
            *
          </span>
        )}
      </label>

      <input
        id={inputId}
        {...registration}
        {...props}
        required={required}
        aria-invalid={!!error}
        aria-describedby={
          error ? errorId : undefined
        }
        className={cn(
          "w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition-all",
          "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
          "dark:border-slate-700 dark:focus:border-blue-400",
          error &&
            "border-red-500 focus:border-red-500 focus:ring-red-500/20",
          className
        )}
      />

      {error && (
        <p
          id={errorId}
          role="alert"
          className="text-sm text-red-500"
        >
          {error.message}
        </p>
      )}
    </div>
  );
}