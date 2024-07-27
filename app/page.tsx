import LandingPageFirstSection from "@/components/LandingPageFirstSection";
import LandingPageLastSection from "@/components/LandingPageLastSection";
import LandingPageSecondSection from "@/components/LandingPageSecondSection";
import LandingPageThirdSection from "@/components/LandingPageThirdSection";
import LandingPageUpperSection from "@/components/LandingPageUpperSection";

export default function Home() {
	return (
		<main>
			<LandingPageUpperSection />
			<LandingPageFirstSection />
			<LandingPageSecondSection />
			<LandingPageThirdSection />
			<LandingPageLastSection />
		</main>
	);
}
