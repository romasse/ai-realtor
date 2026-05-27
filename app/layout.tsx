import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Роман Суббота — AI-риэлтор в Днепре",
  description: "Технологичный риэлтор: AI-подбор, аналитика рынка, продажа, аренда и инвестиции в недвижимость Днепра.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
