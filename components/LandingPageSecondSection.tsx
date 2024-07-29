import CardComp from "./CardComp";
import {
  AdultDogAvatarIcon,
  PuppyAvatarIcon,
  SeniorDogAvatarIcon,
} from "./Icons";

export default function LandingPageSecondSection() {
  return (
    <section className="bg-gray-300 p-5 text-center">
      <h3 className="text-2xl font-bold">Nutritious Pet Food</h3>
      <p className="m-5 text-gray-600">
        {`Discover our premium pet food options tailored to your furry
				friend's needs.`}
      </p>
      <div className="m-6 grid gap-3 md:grid-cols-3">
        <CardComp
          title={"Puppy Formula"}
          desc={
            "Nutrient-rich formula to support your puppy's growth and development."
          }
          buttonInp={"Customize"}
        >
          <PuppyAvatarIcon className="h-8 w-8 text-green-600" />
        </CardComp>
        <CardComp
          title={"Adult Formula"}
          desc={"Balanced nutrition to meet the needs of your adult pet."}
          buttonInp={"Customize"}
        >
          <AdultDogAvatarIcon className="h-8 w-8 text-green-600" />
        </CardComp>
        <CardComp
          title={"Senior Formula"}
          desc={"Tailored nutrition to support your senior pet's health."}
          buttonInp={"Customize"}
        >
          <SeniorDogAvatarIcon className="h-8 w-8 text-green-600" />
        </CardComp>
      </div>
    </section>
  );
}
