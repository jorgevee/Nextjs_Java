"use client";
import { signOut } from "next-auth/react";

const callSignOut = async () => {
  await signOut({
    callbackUrl: `/`,
  });
};


export function SignnOutButton(){
  return(
    <button onClick={callSignOut} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
    Sign out
  </button>
  )
}