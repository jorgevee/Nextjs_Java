import { redirect } from "next/navigation";
import { signIn } from "@/utils/auth";
import { AuthError } from "next-auth";
import { signInFun } from "./actions";

export default function SignInForm() {
  // async function signInUser(username, email, password) {
  //   "use server";
  //   try {
  //     const response = await fetch("/api/auth/signin", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         username,
  //         email,
  //         password,
  //       }),
  //     });

  //     if (response.ok) {
  //       // Handle successful sign-in
  //       console.log("Sign-in successful!");
  //     } else {
  //       // Handle sign-in failure
  //       console.error("Sign-in failed.");
  //     }
  //   } catch (error) {
  //     console.error("Error during sign-in:", error);
  //   }
  // }
  return (
    <div className="container mx-auto max-w-md">
      <h1 className="text-3xl font-bold text-gray-800">Sign In</h1>
      <form className="mt-4" action={signInFun}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="border border-gray-400 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            type="text"
            name="username"
            placeholder="Username"
            required={true}
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border border-gray-400 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required={true}
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="border border-gray-400 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          type="submit"
        >
          Sign In
        </button>
        {/* <ToastContainer autoClose={3000} hideProgressBar /> */}
      </form>
    </div>
  );
}
