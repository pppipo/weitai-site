import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "微肽生物 - 专业生物科技公司",
  description: "微肽生物致力于生物科技研发与生产，提供专业的生物技术解决方案",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}