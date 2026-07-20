import { SITE } from "@/lib/constants/site";

export default function FooterBottom() {
  return (
    <div className="mt-12 border-t pt-6">
      <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row md:text-left">
        <p>
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>

        <p>
          Built with{" "}
          <span className="font-medium text-foreground">
            Next.js
          </span>
          ,{" "}
          <span className="font-medium text-foreground">
            TypeScript
          </span>
          ,{" "}
          <span className="font-medium text-foreground">
            Tailwind CSS
          </span>
          {" "}and{" "}
          <span className="font-medium text-foreground">
            Framer Motion
          </span>
          .
        </p>
      </div>
    </div>
  );
}