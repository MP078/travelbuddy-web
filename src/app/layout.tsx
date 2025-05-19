import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TravelBuddy",
  description:
    "Your companion for planning and exploring amazing destinations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="w-full py-6 px-8 bg-white shadow-sm flex justify-between items-center">
          <span className="text-xl font-bold text-[color:var(--primary)]">
            TravelBuddy
          </span>
          <nav>
            <a href="/signup" className="btn ml-4">
              Get Started
            </a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
