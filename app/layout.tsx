import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google"
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "RenoTzy",
  description: "Home Renovation Services in Kenya - RenoTzy",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
