"use client";

import Image from "next/image";
import doggy from "../public/landingpagedog.jpeg";
import { useState } from "react";
import { PawPrintIcon } from "./Icons";
import Link from "next/link";

export default function LandingPageUpperSection() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="bg-green-600 px-6 py-4 rounded-b-lg">
			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-2">
					<PawPrintIcon className="w-6 h-6 text-white" />
					<span className="text-2xl font-bold text-white">
						PetCare
					</span>
				</div>
				<nav className="hidden sm:flex items-center space-x-4">
					<Link
						href={"#"}
						className="text-md text-white hover:underline"
					>
						About
					</Link>
					<Link
						href={"#"}
						className="text-md text-white hover:underline"
					>
						Services
					</Link>
					<Link
						href={"#"}
						className="text-md text-white hover:underline"
					>
						Pet Food
					</Link>
					<button className="text-md items-center justify-center rounded-md bg-slate-100 px-4 py-2 text-sm text-green-600 shadow transition-colors hover:bg-green-600/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2">
						Sign Up
					</button>
				</nav>
				<div className="sm:hidden flex items-center">
					<button
						onClick={toggleMenu}
						className="text-white focus:outline-none"
					>
						<svg
							className="w-6 h-6"
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
				<div className="sm:hidden flex flex-col space-y-2 mt-2">
					<Link
						href={"#"}
						className="text-md text-white hover:underline"
					>
						About
					</Link>
					<Link
						href={"#"}
						className="text-md text-white hover:underline"
					>
						Services
					</Link>
					<Link
						href={"#"}
						className="text-md text-white hover:underline"
					>
						Pet Food
					</Link>
					<button className="text-md items-center justify-center rounded-md bg-slate-100 px-4 py-2 text-sm text-green-600 shadow transition-colors hover:bg-green-600/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2">
						Sign Up
					</button>
				</div>
			)}
			<section className="grid gap-14 sm:m-3 sm:grid-cols-2 sm:items-center">
				<div className="sm:grid-rows m-4 grid gap-3">
					<h1 className="text-4xl text-white">
						Unleash the Best In Your Pet
					</h1>
					<p className="text-lg text-white">
						Discover the ultimate pet care platform that combines
						top-notch services and premium pet food.
					</p>
					<div className="flex space-x-4">
						<button className="focus:ring-primary items-center rounded-md bg-slate-100 text-green-600 px-4 py-2 shadow transition-colors hover:bg-green-600/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2">
							Get Started
						</button>
						<button className="rounded-md border text-white px-4 py-2">
							Learn More
						</button>
					</div>
				</div>
				<div>
					<Image
						src={doggy}
						alt="Landing page Doggy"
						className="rounded-3xl transition ease-in-out duration-700 hover:-translate-y-1 hover:scale-110"
					/>
				</div>
			</section>
		</header>
	);
}
