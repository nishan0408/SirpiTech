import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sirpi Technologies — Software, Web & App Development",
  description: "Sirpi Technologies builds custom websites, web applications and mobile experiences designed around your business requirements.",
  keywords: [
    "sirpi",
    "sirpitech",
    "sirpitechnologies",
    "websitecreation",
    "highqualitywebsitecreationcompany",
    "websitecreationagency",
    "custom software development",
    "web development agency",
    "mobile app development"
  ],
  authors: [{ name: "Sirpi Technologies" }],
  creator: "Sirpi Technologies",
  publisher: "Sirpi Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Sirpi Technologies — Software, Web & App Development",
    description: "Sirpi Technologies builds custom websites, web applications and mobile experiences designed around your business requirements.",
    url: 'https://www.sirpi.tech', // Replace with your actual domain
    siteName: 'Sirpi Technologies',
    locale: 'en_US',
    type: 'website',
  },
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE', // You will get this from Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased selection:bg-primary selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
