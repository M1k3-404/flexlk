"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Navigation from "@/app/ui/navigation";
import Footer from "./ui/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <NextUIProvider>
        <body className={`${inter.className} w-screen min-h-screen`}>
          <Navigation />
          {children}
          <Footer />
        </body>
      </NextUIProvider>
    </html>
  );
}
