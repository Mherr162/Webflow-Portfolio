import type { Metadata } from "next";
import "./globals.css";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

export const metadata: Metadata = {
  title: "Michel Herrera | Software Engineer",
  description: "Associate Software Engineer portfolio showcasing skills, experience, and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen antialiased">
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
