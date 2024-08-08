import Link from "next/link";
import Image from "next/image";
import { getServerAuthSession } from "@/utils/auth";

// Import components as needed:
// import UserProfile from "./UserProfile";
// import RecentActivity from "./RecentActivity";
// import ProjectList from "./ProjectList";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();
  const user = session?.user;

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">
          Please log in to access the dashboard.
        </h2>
        <Link
          href="/login"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Log In
        </Link>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="bg-white w-64 shadow-md flex flex-col">
        <div className="flex items-center justify-center py-4">
          {user && (
            <Image
              src={user.image || "/profile-placeholder.png"}
              alt={`${user.name}'s profile picture`}
              width={64}
              height={64}
              className="rounded-full"
            />
          )}
        </div>

        <nav className="mt-4">
          <ul>
            <li className="p-2 hover:bg-gray-200 rounded">
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="p-2 hover:bg-gray-200 rounded">
              <Link href="/dashboard/projects">Projects</Link>
            </li>
            <li className="p-2 hover:bg-gray-200 rounded">
              <Link href="/dashboard/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex flex-col w-full p-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          {/* Add any user actions or navigation items here */}
          {/* <Link
            href="/logout"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </Link> */}
        </div>

        <div className="flex flex-col gap-4">
          {/* <UserProfile user={user} />{" "} */}
          {/* Replace with your user profile component */}
          {/* <RecentActivity /> Replace with your recent activity component */}
          {/* <ProjectList /> Replace with your project list component */}
          {/* The content passed to DashboardLayout */}
          {children}
        </div>
      </main>
    </div>
  );
}
