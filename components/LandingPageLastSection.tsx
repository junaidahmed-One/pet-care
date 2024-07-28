import { PawPrintIcon } from "./Icons";

export default function LandingPageLastSection() {
	return (
		<footer className="bg-green-600 px-6 py-4">
			<div className="flex flex-col sm:flex-row sm:justify-between">
				<div className="flex items-center space-x-2 mb-4 sm:mb-0">
					<PawPrintIcon className="w-6 h-6 text-white" />
					<span className="text-2xl font-bold text-white">
						PetCare
					</span>
				</div>
				<div className="flex flex-col sm:flex-row sm:space-x-4 sm:items-center">
					<div className="text-md text-white hover:underline mb-2 sm:mb-0">
						Privacy Policy
					</div>
					<div className="text-md text-white hover:underline mb-2 sm:mb-0">
						Terms of Service
					</div>
					<div className="text-md text-white hover:underline mb-2 sm:mb-0">
						Contact Us
					</div>
				</div>
			</div>
		</footer>
	);
}
