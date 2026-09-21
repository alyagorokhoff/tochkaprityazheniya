import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Точка притяжения — с Алей",
  description:
    "Шесть недель практик и личного сопровождения, в которых новое состояние начинает проявляться в теле, отношениях, деньгах и реализации.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
