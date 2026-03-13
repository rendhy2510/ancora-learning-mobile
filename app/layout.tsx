import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import HiconProvider from "@/components/layout/HiconProvider";
import { Providers } from "./providers";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const viewport: import("next").Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "L&D - Learning and Development Platform",
  description:
    "Ancora Indonesia Resource - Learning Management System for professional development",
  keywords: [
    "learning",
    "development",
    "LMS",
    "education",
    "training",
    "courses",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* FontShare General Sans is now imported inside globals.css */}
      </head>
      <body
        className={`font-sans antialiased text-gray-900 bg-gray-50 dark:bg-dark-bg transition-colors ${geist.variable}`}
      >
        <Providers>
          <HiconProvider>{children}</HiconProvider>
        </Providers>
      </body>
    </html>
  );
}
