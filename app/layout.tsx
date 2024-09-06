import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PawPrintIcon } from "@/components/Icons";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PetCare",
  description:
    "Discover the ultimate pet care platform that combines top-notch services and premium pet food.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
