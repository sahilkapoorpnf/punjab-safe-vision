import { ExternalLink } from "lucide-react";

interface SourceLinkProps {
  href: string;
  children: string;
  dark?: boolean;
}

export default function SourceLink({ href, children, dark = false }: SourceLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-1 text-[10px] font-semibold underline underline-offset-2 transition-opacity hover:opacity-70 ${
        dark ? "text-primary-foreground/70" : "text-muted-foreground"
      }`}
    >
      {children}
      <ExternalLink className="h-3 w-3" aria-hidden="true" />
    </a>
  );
}