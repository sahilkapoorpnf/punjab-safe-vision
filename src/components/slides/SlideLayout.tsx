import { ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export default function SlideLayout({ children, className = "", dark }: SlideLayoutProps) {
  return (
    <div
      className={`min-h-screen w-full px-6 md:px-16 lg:px-24 py-16 pb-28 ${
        dark ? "text-primary-foreground" : "text-foreground"
      } ${className}`}
    >
      <div className="max-w-6xl mx-auto w-full">{children}</div>
    </div>
  );
}
