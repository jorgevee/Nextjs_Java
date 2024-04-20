import Link from "next/link";
import {  SignnOutButton } from "./ClientLayout";
import { getServerAuthSession } from "@/utils/auth";


export default async function Header(): Promise<JSX.Element> {
  const session = await getServerAuthSession();

  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
      <Link href="/" className="text-2xl font-bold text-gray-800">
        NextJava
      </Link>

      <div className="flex items-center space-x-4">
  {session ? (
    <>
      <Link href="/dashboard" className="px-4 py-2 bg-blue-500 text-white rounded">
        Dashboard
      </Link>
      <SignnOutButton />
    </>
  ) : (
    <>
      <Link href="/auth/signin" className="px-4 py-2 border border-gray-300 rounded">
        Log in
      </Link>
      <Link href="/auth/signup" className="px-4 py-2 bg-blue-500 text-white rounded">
        Sign up
      </Link>
    </>
  )}
</div>
    </header>
  );
}