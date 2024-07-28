import CardComp from "./CardComp";
import {
	AdultDogAvatarIcon,
	PuppyAvatarIcon,
	SeniorDogAvatarIcon,
} from "./Icons";

export default function LandingPageSecondSection() {
	return (
		<section className="text-center bg-gray-300 p-5">
			<h3 className="text-2xl font-bold">Nutritious Pet Food</h3>
			<p className="text-gray-600 m-5">
				{`Discover our premium pet food options tailored to your furry
				friend's needs.`}
			</p>
			<div className="grid md:grid-cols-3 m-6 gap-3">
				<CardComp
					title={"Puppy Formula"}
					desc={
						"Nutrient-rich formula to support your puppy's growth and development."
					}
					buttonInp={"Customize"}
				>
					<PuppyAvatarIcon className="w-8 h-8 text-green-600" />
				</CardComp>
				<CardComp
					title={"Adult Formula"}
					desc={
						"Balanced nutrition to meet the needs of your adult pet."
					}
					buttonInp={"Customize"}
				>
					<AdultDogAvatarIcon className="w-8 h-8 text-green-600" />
				</CardComp>
				<CardComp
					title={"Senior Formula"}
					desc={
						"Tailored nutrition to support your senior pet's health."
					}
					buttonInp={"Customize"}
				>
					<SeniorDogAvatarIcon className="w-8 h-8 text-green-600" />
				</CardComp>
			</div>
		</section>
	);
}
