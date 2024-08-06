"use client";

import { signUp } from "@/app/actions/user";
import Link from "next/link";
import { useState } from "react";

async function addData(fullname: string, email: string, password: string) {
  await signUp(fullname, email, password);
}

export default function SignUp() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="rounded-md">
      <div className="flex h-screen justify-center">
        <div className="mx-auto mb-60 mt-40 grid w-full max-w-md gap-2 rounded-md border bg-white p-8 shadow-xl sm:mb-60 sm:mt-40 sm:gap-2">
          <h3 className="text-center text-xl text-green-600">Sign Up</h3>
          <div className="flex flex-col">
            <label htmlFor="fullName" className="text-sm">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Enter Full Name"
              className="placeholder:text-muted-foreground h-10 rounded-md border focus:outline-green-600"
              onChange={(e) => {
                e.preventDefault();
                setFullName(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="emailfield" className="text-sm">
              Email
            </label>
            <input
              type="email"
              name="emailfield"
              id="emailfield"
              placeholder="Enter Email ID"
              className="placeholder:text-muted-foreground h-10 rounded-md border focus:outline-green-600"
              onChange={(e) => {
                e.preventDefault();
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="passField" className="text-sm">
              Password
            </label>
            <input
              type="password"
              name="passField"
              id="passField"
              placeholder="Enter Password"
              className="placeholder:text-muted-foreground h-10 rounded-md border focus:outline-green-600"
              onChange={(e) => {
                e.preventDefault();
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            className="text-md items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm text-white shadow transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
            onClick={async () => {
              const res = await addData(fullname, email, password);
              console.log(res);
            }}
          >
            Register
          </button>
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link href={"/signin"} className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
