import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { AuroraBackground } from "@/components/ui/aurora-background";


const playfair = Playfair_Display();



export const metadata: Metadata = {
  title: "Anshika",
  description: "portfolio website of Anshika Jain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.className} antialiased`} >
   
          <div className="relative z-10 min-h-screen flex flex-col ">
            {children}
          </div>
       
      </body>
    </html>
  );
}
