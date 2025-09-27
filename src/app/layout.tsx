import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Микропептид Био - Профессиональная биотехнологическая компания",
  description: "Микропептид Био занимается исследованиями и производством в области биотехнологий, предоставляя профессиональные решения в области биотехнологий",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}