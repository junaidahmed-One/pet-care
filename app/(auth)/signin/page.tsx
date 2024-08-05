import Link from "next/link";

export default function SignIn() {
  return (
    <div className="rounded-md">
      <div className="flex h-screen justify-center">
        <div className="mx-auto mb-60 mt-40 grid w-full max-w-md gap-2 rounded-md border bg-white p-8 shadow-xl sm:mb-60 sm:mt-40 sm:gap-2">
          <h3 className="text-center text-xl text-green-600">Sign In</h3>
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
            />
          </div>
          <button className="text-md items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm text-white shadow transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
            Login
          </button>
          <div className="text-center text-sm">
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
