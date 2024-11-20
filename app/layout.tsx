import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

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
  title: "Big Heart Feeds | Nutritious Dog Food",
  description: "Big Heart Feeds offers premium, nutritionally balanced dog food. Crafted with love for your canine companion's health and happiness.",
  openGraph: {
    title: "Big Heart Feeds | Nutritious Dog Food",
    description: "Premium dog food for health and happiness.",
    images: [
      {
        url: "/images/og-image.jpg",  // Replace with your image path
        width: 1200,
        height: 630,
        alt: "Big Heart Feeds offers nutritious food for dogs",
      },
    ],
  }
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
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
