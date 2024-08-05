"use client";

import Image from "next/image";
import doggy from "../public/landingpagedog.jpeg";
import { useState } from "react";
import { PawPrintIcon } from "./Icons";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LandingPageUpperSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="rounded-b-lg bg-green-600 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <PawPrintIcon className="h-6 w-6 text-white" />
          <span className="text-2xl font-bold text-white">PetCare</span>
        </div>
        <nav className="hidden items-center space-x-4 sm:flex">
          <Link href={"#"} className="text-md text-white hover:underline">
            About
          </Link>
          <Link href={"#"} className="text-md text-white hover:underline">
            Services
          </Link>
          <Link href={"#"} className="text-md text-white hover:underline">
            Pet Food
          </Link>
          <button
            className="text-md items-center justify-center rounded-md bg-slate-100 px-4 py-2 text-sm text-green-600 shadow transition-colors hover:bg-green-600/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
            onClick={() => {
              router.push("/signup");
            }}
          >
            Sign Up
          </button>
        </nav>
        <div className="flex items-center sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="mt-2 flex flex-col space-y-2 sm:hidden">
          <Link href={"#"} className="text-md text-white hover:underline">
            About
          </Link>
          <Link href={"#"} className="text-md text-white hover:underline">
            Services
          </Link>
          <Link href={"#"} className="text-md text-white hover:underline">
            Pet Food
          </Link>
          <button
            className="text-md items-center justify-center rounded-md bg-slate-100 px-4 py-2 text-sm text-green-600 shadow transition-colors hover:bg-green-600/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
            onClick={() => {
              router.push("/signup");
            }}
          >
            Sign Up
          </button>
        </div>
      )}
      <section className="grid gap-14 sm:m-3 sm:grid-cols-2 sm:items-center">
        <div className="sm:grid-rows m-4 grid gap-3">
          <h1 className="text-4xl text-white">Unleash the Best In Your Pet</h1>
          <p className="text-lg text-white">
            Discover the ultimate pet care platform that combines top-notch
            services and premium pet food.
          </p>
          <div className="flex space-x-4">
            <button
              className="focus:ring-primary items-center rounded-md bg-slate-100 px-4 py-2 text-green-600 shadow transition-colors hover:bg-green-600/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
              onClick={() => {
                router.push("/signup");
              }}
            >
              Get Started
            </button>
            <button className="rounded-md border px-4 py-2 text-white">
              Learn More
            </button>
          </div>
        </div>
        <div>
          <Image
            src={doggy}
            alt="Landing page Doggy"
            className="rounded-3xl transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-110"
          />
        </div>
      </section>
    </header>
  );
}
