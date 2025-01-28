import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { PageTransition } from "@/components/PageTransition";
import { StairTransition } from "@/components/StairTransition";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"
import { ThemeToggleButton } from "@/components/ThemeButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joel Sng",
  description: `Joel Sng's portfolio page.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <StairTransition />
        <PageTransition>
          <Analytics />

          <div className="px-4">
            {children}

          </div>
          <ThemeToggleButton />

        </PageTransition>
      </body>
    </html>
  );
}
