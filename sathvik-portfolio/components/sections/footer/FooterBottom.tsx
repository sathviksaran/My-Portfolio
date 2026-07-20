import { SITE } from "@/lib/constants/site";

export default function FooterBottom() {
  return (
    <div className="mt-12 border-t pt-6 text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </p>
    </div>
  );
}