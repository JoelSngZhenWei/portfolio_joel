import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { PageTransition } from "@/components/PageTransition";
import { StairTransition } from "@/components/StairTransition";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"
import { ThemeToggleButton } from "@/components/ThemeButton";
import { ThemeProvider } from "next-themes"

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
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <StairTransition />
          <PageTransition>
            <Analytics />
            <div className="p-4">
              {children}
            </div>
            <div className="fixed bottom-8 right-8 hidden lg:block">
              <ThemeToggleButton />
            </div>
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
