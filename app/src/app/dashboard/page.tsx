"use client";
import { getSession, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { getAuth } from "./actions";

export default function Dashboard() {
  const { data: session, status } = useSession();
  // Add error handling for failed authentication

  if (!session) {
    // Redirect to the home page if the user is not authenticated
    redirect("/");
    return null; // Return null to prevent rendering the rest of the component
  }

  const { user } = session;

  return (
    <div className="container mx-auto max-w-md px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

      <p className="text-gray-700 mt-2 mb-4">
        Congrats, you can view this page!
      </p>

      <div className="bg-gray-500 p-4 rounded shadow">
        <p className="text-white">User: {user?.email}</p>
      </div>
    </div>
  );
}
