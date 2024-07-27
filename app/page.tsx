import LandingPageFirstSection from "@/components/LandingPageFirstSection";
import LandingPageSecondSection from "@/components/LandingPageSecondSection";
import NavBar from "@/components/NavBar";

export default function Home() {
	return (
		<main>
			<NavBar />
			<LandingPageFirstSection />
			<LandingPageSecondSection />
		</main>
	);
}
