import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Head from "next/head";

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
  description:
    "Big Heart Feeds offers premium, nutritionally balanced dog food. Crafted with love for your canine companion's health and happiness.",
  openGraph: {
    title: "Big Heart Feeds | Nutritious Dog Food",
    description: "Premium dog food for health and happiness.",
    images: [
      {
        url: "/images/adult-dog.jpg",
        width: 1200,
        height: 630,
        alt: "Big Heart Feeds offers premium, nutritionally balanced dog food. Crafted with love for your canine companion's health and happiness.",
      },
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {" "}
        <Head>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
            function loadScript(a){
              var b=document.getElementsByTagName("head")[0],
                  c=document.createElement("script");
              c.type="text/javascript";
              c.src="https://tracker.metricool.com/resources/be.js";
              c.onreadystatechange=a;
              c.onload=a;
              b.appendChild(c);
            }
            loadScript(function(){
              beTracker.t({hash:"935e6458658af8ce14a20a1055e7e318"});
            });
          `,
            }}
          />
        </Head>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
