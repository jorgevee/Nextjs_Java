"use server";
import { signIn } from "@/utils/auth";
import { AuthError } from "next-auth";

export async function signInFun(formData) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError)
      // Handle auth errors
      throw error.cause?.err?.message; // Rethrow all other errors
  }
}
