import "@/styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "OpsCommerce | In-House Delivery Management Software for Ecommerce",
  description:
    "All-in-one in-house delivery management software for ecommerce. Connect multi-store orders, dispatch drivers, and reconcile COD cash in one dashboard. Try free.",
  keywords: [
    "in-house delivery management software for ecommerce",
    "ecommerce delivery management",
    "COD cash reconciliation",
    "driver management platform",
    "multi store delivery tracking",
    "Shopify delivery app",
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://opscommerce.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OpsCommerce | In-House Delivery Management Software for Ecommerce",
    description:
      "All-in-one in-house delivery management software for ecommerce. Connect multi-store orders, dispatch drivers, and reconcile COD cash seamlessly.",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://opscommerce.app",
    siteName: "OpsCommerce",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "OpsCommerce - In-House Delivery Management Software for Ecommerce",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpsCommerce | In-House Delivery Management Software for Ecommerce",
    description:
      "All-in-one in-house delivery management software for ecommerce. Connect multi-store orders, dispatch drivers, and reconcile COD cash seamlessly.",
    creator: "@sreenath_kumar",
    site: "@opscommerce",
    images: ["/og-image.webp"],
  },

};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-primary`}
      >
        {children}
        <Toaster position="top-center" />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
    </html>
  );
}
