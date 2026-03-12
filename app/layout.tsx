import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IT Support for Small Businesses | Montreal – Seb",
  description:
    "Professional IT support services including email setup, network configuration and security solutions for small businesses in Montreal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
