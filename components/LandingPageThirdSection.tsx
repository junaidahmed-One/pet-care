import { PersonAvatarIcon } from "./Icons";
import ReviewCard from "./ReviewCard";

export default function LandingPageThirdSection() {
	return (
		<section className="m-10 text-center">
			<h3 className="text-2xl font-bold">What Our Customers Say</h3>
			<p className="text-gray-400 m-5">
				Hear from our satisfied customers about their experience with
				our pet care platform.
			</p>
			<div className="grid md:grid-cols-3 gap-3">
				<ReviewCard
					title={"John Doe"}
					desc={`"The pet services and food options have been a game-changer\n for my furry friend. Highly recommended!"`}
				>
					<PersonAvatarIcon className="w-8 h-8 text-gray-500" />
				</ReviewCard>
				<ReviewCard
					title={"Sarah Miller"}
					desc={`"I've been using this platform for all my pet's needs, and\n the convenience is unbeatable. Highly satisfied!"`}
				>
					<PersonAvatarIcon className="w-8 h-8 text-gray-500" />
				</ReviewCard>
				<ReviewCard
					title={"Michael Johnson"}
					desc={`"The pet food options are fantastic, and my dog loves them.\n Highly recommended for all pet owners!"`}
				>
					<PersonAvatarIcon className="w-8 h-8 text-gray-500" />
				</ReviewCard>
			</div>
		</section>
	);
}
