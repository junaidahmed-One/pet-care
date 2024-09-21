"use client";

import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "sonner";

interface RequestType {
  email: string;
  password: string;
  fullname: string;
}

async function addData(req: RequestType) {
  try {
    const signupResp = await axios.post("/api/auth/user/signup", {
      email: req.email,
      password: req.password,
      fullname: req.fullname,
    });
    return signupResp;
  } catch (error) {
    return error;
  }
}

export default function SignUp() {
  const router = useRouter();
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="rounded-md">
      <div className="flex h-screen justify-center">
        <div className="mx-auto mb-60 mt-40 grid w-full max-w-md gap-2 rounded-md border bg-white p-8 shadow-xl sm:mb-60 sm:mt-40 sm:gap-2">
          <h3 className="text-center text-xl italic text-green-600">Sign Up</h3>
          <div className="flex flex-col italic">
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
          <div className="flex flex-col italic">
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
          <div className="flex flex-col italic">
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
            className="text-md items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm italic text-white shadow transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
            onClick={async () => {
              toast.success("Signing in...");
              const res: any = await addData({ fullname, email, password });
              if (res.status == 201) {
                router.push("/inprogress");
              } else {
                toast.error("Error signing in! Please try again...");
              }
              console.log(res);
            }}
          >
            Register
          </button>
          <div className="text-center text-sm italic">
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
