import type { Metadata } from "next";
import Link from "next/link";
import { getServerAuthSession } from "@/utils/auth";

export default async function Dashboard() {
  const session = await getServerAuthSession();
  // Add error handling for failed authentication

  return (
    <div className="container mx-auto max-w-md px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

      <p className="text-gray-700 mt-2 mb-4">
        Congrats, you can view this page!
      </p>

      <div className="bg-gray-500 p-4 rounded shadow">
        <p className="text-white">User: {session?.user?.email}</p>
      </div>
    </div>
  );
}
