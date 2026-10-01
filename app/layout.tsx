import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { LanguageProvider } from "./components/LanguageContext";

import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import BookingProvider from "./components/BookingProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://transcendingpsychiatry.com"),

  title: {
    default: "Transcending Psychiatry | Psychiatric Care in NJ & NYC",
    template: "%s | Transcending Psychiatry",
  },

  description:
    "Compassionate, personalized psychiatric care for adolescents and adults. Transcending Psychiatry provides psychiatric evaluations, medication management, therapy, and telehealth services in New Jersey and New York.",

  keywords: [
    "Transcending Psychiatry",
    "psychiatrist New Jersey",
    "psychiatric nurse practitioner New Jersey",
    "psychiatric care New Jersey",
    "psychiatric care New York",
    "mental health services New Jersey",
    "mental health services NYC",
    "medication management",
    "psychiatric evaluation",
    "anxiety treatment",
    "depression treatment",
    "ADHD treatment",
    "cognitive behavioral therapy",
    "CBT therapy",
    "child adolescent therapy",
    "telehealth psychiatry",
    "Joseph Spitalieri",
  ],

  authors: [{ name: "Transcending Psychiatry LLC" }],
  creator: "Transcending Psychiatry LLC",
  publisher: "Transcending Psychiatry LLC",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://transcendingpsychiatry.com",
    siteName: "Transcending Psychiatry",
    title: "Transcending Psychiatry | Psychiatric Care in NJ & NYC",
    description:
      "Compassionate, personalized psychiatric care including evaluations, medication management, therapy, and telehealth services in New Jersey and New York.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Transcending Psychiatry | Psychiatric Care in NJ & NYC",
    description:
      "Compassionate, personalized psychiatric care in New Jersey and New York.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body>
          <LanguageProvider>
            <BookingProvider>
              <Navbar />

              <main>{children}</main>

              <Footer />
            </BookingProvider>
          </LanguageProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}