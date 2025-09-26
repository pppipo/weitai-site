import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}