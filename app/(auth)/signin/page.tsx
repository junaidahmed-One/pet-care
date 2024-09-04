"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface SigninRequestType {
  email: string;
  password: string;
}

async function signin(req: SigninRequestType) {
  try {
    const signinResp = await axios.post("/api/user/signin", {
      email: req.email,
      password: req.password,
    });
    return signinResp;
  } catch (error) {
    console.error("Error during signin request:", error);
    return error;
  }
}

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="rounded-md">
      <div className="flex h-screen justify-center">
        <div className="mx-auto mb-60 mt-40 grid w-full max-w-md gap-2 rounded-md border bg-white p-8 shadow-xl sm:mb-60 sm:mt-40 sm:gap-2">
          <h3 className="text-center text-xl italic text-green-600">Sign In</h3>
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
              toast.success("Signin in...", {
                duration: 1500,
              });
              const res: any = await signin({ email, password });
              if (res.status == 200) {
                router.push("/inprogress");
              } else {
                toast.error("Error Signin in...");
              }
              console.log(res);
            }}
          >
            Login
          </button>
          <div className="text-center text-sm italic">
            <div className="text-gray-400">
              <button>Forgot Password</button>
            </div>
            No account ?{" "}
            <Link href={"/signup"} className="text-blue-500">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
