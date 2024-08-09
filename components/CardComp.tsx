"use client";
import { useRouter } from "next/navigation";

const CardComp: React.FC<React.PropsWithChildren<CardType>> = ({
  children,
  title,
  desc,
  buttonInp,
}) => {
  const router = useRouter();
  return (
    <div className="grid rounded-md border bg-white p-6 transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-110">
      <div className="mb-4 flex items-center justify-center">{children}</div>
      <p className="text-center text-lg font-extrabold">{title}</p>
      <p className="text-center text-gray-400">{desc}</p>
      <div className="flex justify-center">
        <button
          className="h-10 w-24 justify-center rounded-md bg-green-600 text-center text-sm font-medium text-white sm:h-10 sm:w-24"
          onClick={() => {
            router.push("/signup");
          }}
        >
          {buttonInp}
        </button>
      </div>
    </div>
  );
};

export default CardComp;
