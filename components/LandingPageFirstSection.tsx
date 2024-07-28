import CardComp from "./CardComp";
import { HomeIcon, ScissorsIcon, StethoscopeIcon, TruckIcon } from "./Icons";

export default function LandingPageFirstSection() {
	return (
		<section className="m-10 text-center">
			<h3 className="text-2xl font-bold">Our Pet Services</h3>
			<p className="text-gray-400 m-5">
				Explore our wide range of pet services to keep your furry
				friends happy and healthy.
			</p>
			<div className="grid md:grid-cols-4 m-6 gap-3">
				<CardComp
					title={"Grooming"}
					desc={
						"Professional grooming services to keep your pet looking their best."
					}
					buttonInp={"Learn More"}
				>
					<ScissorsIcon className="w-8 h-8 text-green-600" />
				</CardComp>
				<CardComp
					title={"Veterinary"}
					desc={
						"Comprehensive veterinary care for your pet's health and well-being."
					}
					buttonInp={"Learn More"}
				>
					<StethoscopeIcon className="w-8 h-8 text-green-600" />
				</CardComp>
				<CardComp
					title={"Boarding"}
					desc={
						"Safe and comfortable boarding services for your pet while you're away."
					}
					buttonInp={"Learn More"}
				>
					<HomeIcon className="w-8 h-8 text-green-600" />
				</CardComp>
				<CardComp
					title={"Pet Sitting"}
					desc={
						"Reliable pet sitting services to ensure your pet's comfort and care."
					}
					buttonInp={"Learn More"}
				>
					<TruckIcon className="w-8 h-8 text-green-600" />
				</CardComp>
			</div>
		</section>
	);
}
