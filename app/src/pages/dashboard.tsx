import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();

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
