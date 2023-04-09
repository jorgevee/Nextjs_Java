import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Header = () => {
  const { data: session } = useSession();

  const handleSignout = () => {
    signOut();
  };

  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
      <Link href="/" className="text-2xl font-bold text-gray-800">
        NextJava
      </Link>

      <div className="flex items-center space-x-4">
        {session ? (
          <Link
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            href="/dashboard"
          >
            Dashboard
          </Link>
        ) : (
          <>
            <Link
              href="/auth/signin"
              className="bg-white hover:bg-gray-100 text-blue-500 font-semibold hover:text-blue-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Log in
            </Link>
            <Link
              href="/auth/signup"
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign up
            </Link>
          </>
        )}
        {session && (
          <button
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
            onClick={handleSignout}
          >
            Sign out
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
