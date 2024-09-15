import localFont from "next/font/local";
import "./globals.css";
import Footer from "../components/homepage/Footer";
import Navbar from "../components/homepage/Navbar";
import { firestore, app } from "../lib/firebase"; // Ensure Firebase is initialized
import ContactFormButton from "@/components/ContactFormButton";
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

export const metadata = {
  title: "Fail Ideas",
  description: "A marketplace to sell abandoned projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <GoogleAnalytics gaId="G-M1KJ4XTS4K" />
        <ContactFormButton />
        <Footer />
      </body>
    </html>
  );
}
