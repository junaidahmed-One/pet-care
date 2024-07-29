import CardComp from "./CardComp";
import { HomeIcon, ScissorsIcon, StethoscopeIcon, TruckIcon } from "./Icons";

export default function LandingPageFirstSection() {
  return (
    <section className="m-10 text-center">
      <h3 className="text-2xl font-bold">Our Pet Services</h3>
      <p className="m-5 text-gray-400">
        Explore our wide range of pet services to keep your furry friends happy
        and healthy.
      </p>
      <div className="m-6 grid gap-3 md:grid-cols-4">
        <CardComp
          title={"Grooming"}
          desc={
            "Professional grooming services to keep your pet looking their best."
          }
          buttonInp={"Learn More"}
        >
          <ScissorsIcon className="h-8 w-8 text-green-600" />
        </CardComp>
        <CardComp
          title={"Veterinary"}
          desc={
            "Comprehensive veterinary care for your pet's health and well-being."
          }
          buttonInp={"Learn More"}
        >
          <StethoscopeIcon className="h-8 w-8 text-green-600" />
        </CardComp>
        <CardComp
          title={"Boarding"}
          desc={
            "Safe and comfortable boarding services for your pet while you're away."
          }
          buttonInp={"Learn More"}
        >
          <HomeIcon className="h-8 w-8 text-green-600" />
        </CardComp>
        <CardComp
          title={"Pet Sitting"}
          desc={
            "Reliable pet sitting services to ensure your pet's comfort and care."
          }
          buttonInp={"Learn More"}
        >
          <TruckIcon className="h-8 w-8 text-green-600" />
        </CardComp>
      </div>
    </section>
  );
}
