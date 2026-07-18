"use client";

import type { TextareaHTMLAttributes } from "react";
import type {
  FieldError,
  UseFormRegisterReturn,
} from "react-hook-form";

import { cn } from "@/lib/utils";

interface ContactTextareaProps
  extends Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "name"
  > {
  label: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
  maxLength?: number;
  currentLength?: number;
}

export default function ContactTextarea({
  label,
  registration,
  error,
  className,
  id,
  required,
  maxLength,
  currentLength,
  ...props
}: ContactTextareaProps) {
  const textareaId = id ?? registration.name;
  const errorId = `${textareaId}-error`;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label
          htmlFor={textareaId}
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

        {typeof maxLength === "number" && (
          <span className="text-xs text-slate-500">
            {currentLength ?? 0}/{maxLength}
          </span>
        )}
      </div>

      <textarea
        id={textareaId}
        {...registration}
        {...props}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          "min-h-[160px] w-full resize-y rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition-all",
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