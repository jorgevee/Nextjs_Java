"use server";
import { AuthError } from "next-auth";
import { signIn, signOut } from "@/utils/auth";

export async function SignOutAuth() {
  await signOut();
}
