import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aqua Fresca - Pure Spring Water from Timor-Leste",
  description: "The purest spring water from the pristine mountains of Timor-Leste, bottled with care to preserve its natural minerals and refreshing taste.",
  openGraph: {
    title: "Aqua Fresca - Pure Spring Water from Timor-Leste",
    description: "The purest spring water from the pristine mountains of Timor-Leste, bottled with care to preserve its natural minerals and refreshing taste.",
    url: "https://aqua-fresca.vercel.app",
    siteName: "Aqua Fresca",
    images: [
      {
        url: "https://aqua-fresca.vercel.app/image/fresca.jpg",
        width: 1200,
        height: 630,
        alt: "Aqua Fresca Spring Water",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aqua Fresca - Pure Spring Water from Timor-Leste",
    description: "The purest spring water from the pristine mountains of Timor-Leste, bottled with care to preserve its natural minerals and refreshing taste.",
    images: ["https://aqua-fresca.vercel.app/image/fresca.jpg"],
  },
  icons: {
    icon: "/image/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
