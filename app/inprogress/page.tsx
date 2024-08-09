import Image from "next/image";
import inporgresdog from "../../public/inprogress.gif";
export default function InProgress() {
  return (
    <div className="flex flex-col justify-center">
      <div className="">
        <h1 className="text-center text-4xl">Work in Progress</h1>
      </div>

      <div className="flex justify-center">
        <Image
          src={inporgresdog}
          alt="giphy image"
          width={"480"}
          height={"480"}
        />
      </div>
    </div>
  );
}
