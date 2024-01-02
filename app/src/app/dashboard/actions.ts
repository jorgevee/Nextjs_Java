"use server";
import { auth } from "@/utils/auth";
export async function getAuth() {
  const { user } = await auth();

  return user;
}
