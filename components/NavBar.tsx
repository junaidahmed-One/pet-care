"use client";

import Image from "next/image";
import doggy from "../public/landingpagedog.jpeg";
import { useState } from "react";
export default function NavBar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="bg-green-600 px-6 py-4 rounded-b-lg">
			<div className="text-2xl font-bold text-white">PetCare</div>
			<div className="hidden sm:flex items-center space-x-4 justify-end flex-grow">
				<div className="text-md text-white hover:underline">About</div>
				<div className="text-md text-white hover:underline">
					Services
				</div>
				<div className="text-md text-white hover:underline">
					Pet Food
				</div>
				<button className="text-md items-center justify-center rounded-md bg-slate-100 px-4 py-2 text-sm text-green-600 shadow transition-colors hover:bg-green-600/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2">
					Sign Up
				</button>
			</div>
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
			{isMenuOpen && (
				<div className="sm:hidden flex flex-col space-y-2 mt-2">
					<div className="text-md text-white hover:underline">
						About
					</div>
					<div className="text-md text-white hover:underline">
						Services
					</div>
					<div className="text-md text-white hover:underline">
						Pet Food
					</div>
					<button className="text-md items-center justify-center rounded-md bg-slate-100 px-4 py-2 text-sm text-green-600 shadow transition-colors hover:bg-green-600/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2">
						Sign Up
					</button>
				</div>
			)}
			<div className="grid gap-14 sm:m-3 sm:grid-cols-2 sm:items-center">
				<div className="sm:grid-rows m-4 grid gap-3">
					<h1 className="text-4xl text-white">
						Unleash the Best In Your Pet
					</h1>
					<p className="text-lg text-white">
						Discover the ultimate pet care platform that combines
						top-notch services and premium pet food.
					</p>
					<button className="focus:ring-primary items-center rounded-md bg-slate-100 text-green-600 shadow transition-colors hover:bg-green-600/90 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2">
						Get Started
					</button>
					<button className="rounded-md border text-white">
						Learn More
					</button>
				</div>
				<div>
					<Image
						src={doggy}
						alt="Landing page Doggy"
						className="rounded-3xl"
					></Image>
				</div>
			</div>
		</div>
	);
}
