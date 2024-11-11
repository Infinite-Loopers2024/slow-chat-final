import type { Metadata } from "next";
import "./globals.css";
import {Inter} from "next/font/google"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Slow Chat",
  description: "Slowest chat app you will ever use",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
