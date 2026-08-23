import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Augusto Accorsi — Technical Lead & Senior Software Engineer",
  description:
    "Portfolio of Augusto Accorsi, Technical Lead and Senior Software Engineer at SAP Labs Latin America. Specializing in React, TypeScript, SAPUI5, and enterprise-scale frontend architecture.",
  keywords: [
    "Augusto Accorsi",
    "Technical Lead",
    "Senior Software Engineer",
    "SAP",
    "React",
    "TypeScript",
    "SAPUI5",
    "Frontend",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
