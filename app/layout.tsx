import "@/styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "sonner";

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
  metadataBase: new URL("https://opscommerce.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OpsCommerce | In-House Delivery Management Software for Ecommerce",
    description:
      "All-in-one in-house delivery management software for ecommerce. Connect multi-store orders, dispatch drivers, and reconcile COD cash seamlessly.",
    url: "https://opscommerce.app",
    siteName: "OpsCommerce",
    images: [
      {
        url: "/og_image.png",
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
    creator: "@YourPersonalHandle",
    site: "@OpsCommerce",
    images: ["/og_image.png"],
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
    </html>
  );
}
