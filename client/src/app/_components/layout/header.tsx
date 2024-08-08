import Link from "next/link";
import { SignnOutButton } from "./ClientLayout";
import { getServerAuthSession } from "@/utils/auth";
import MobileMenuButton from "./mobile-menu-button";

export default async function Header(): Promise<JSX.Element> {
  const session = await getServerAuthSession();

  return (
    <header className="bg-white border-b-4 border-indigo-600 fixed top-0 left-0 w-full z-10">
      <div className="flex justify-between items-center py-4 px-6">
        <MobileMenuButton />
        <Link href="/" className="text-xl font-bold text-gray-800">
          NextJava
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link
            href="/about"
            className="px-4 py-2 rounded hover:bg-gray-200 hover:text-gray-800 transition duration-300 ease-in-out"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 rounded hover:bg-gray-200 hover:text-gray-800 transition duration-300 ease-in-out"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          {session ? (
            <>
              <Link
                href="/dashboard"
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Dashboard
              </Link>
              <SignnOutButton />
            </>
          ) : (
            <>
              <Link
                href="/auth/signin"
                className="px-4 py-2 rounded hover:bg-gray-200 hover:text-gray-800"
              >
                Log in
              </Link>
              <Link
                href="/auth/signup"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:text-white"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
