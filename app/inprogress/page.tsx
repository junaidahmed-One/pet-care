import Image from "next/image";
import inporgresdog from "../../public/inprogress.gif";
export default function InProgress() {
  return (
    <div className="flex flex-col justify-center">
      <div className="mt-10">
        <h1 className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-center text-4xl font-bold italic text-transparent">
          Work in Progress
        </h1>
      </div>

      <div className="flex justify-center">
        <Image
          src={inporgresdog}
          alt="giphy image"
          width={"480"}
          height={"480"}
        />
      </div>
      <h1 className="mt-8 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-center text-4xl font-bold italic text-transparent">
        Stay Tuned!
      </h1>
    </div>
  );
}
