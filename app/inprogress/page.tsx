"use client";
import Image from "next/image";
import inporgresdog from "../../public/inprogress.gif";
import { signOut, useSession } from "next-auth/react";

export default function InProgress() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center">
      {session && (
        <div className="text-center">
          <h1 className="text-2xl font-bold">Welcome, {session.user?.name}!</h1>
          <button
            onClick={() => signOut({ callbackUrl: "/signin" })}
            className="mt-4 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            Sign out
          </button>
        </div>
      )}

      <div className="mt-10">
        <h1 className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-center text-4xl font-bold italic text-transparent">
          Work in Progress
        </h1>
      </div>

      <div className="mt-4 flex justify-center">
        <Image
          src={inporgresdog}
          alt="Work in Progress"
          width={480}
          height={480}
        />
      </div>

      <h1 className="mt-8 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-center text-4xl font-bold italic text-transparent">
        Stay Tuned!
      </h1>
    </div>
  );
}
