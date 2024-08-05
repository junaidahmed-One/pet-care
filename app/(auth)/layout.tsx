import { PawPrintIcon } from "@/components/Icons";
import Link from "next/link";
import React from "react";

export default function AuthRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen bg-green-600">
      <div className="flex items-center space-x-2">
        <PawPrintIcon className="h-6 w-6 text-white" />
        <span className="text-2xl font-bold text-white">
          <Link href={"/"}>PetCare</Link>
        </span>
      </div>
      {children}
    </div>
  );
}
