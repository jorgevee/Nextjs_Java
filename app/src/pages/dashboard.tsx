import { useSession } from "next-auth/react";
import { useRouter } from "next/router";


function UnauthorizedMessage() {
  return <div className="container mx-auto max-w-md">No authorized</div>;
}

export default function Dashboard() {
  const { data: session } = useSession();

  if (!session) {
    return <UnauthorizedMessage />;
  }

  return (
    <div className="container mx-auto max-w-md">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      <p className="text-gray-700">Congrats, you can view this page!</p>
      <div className="flex flex-col mt-4 bg-gray-500 py-2 px-4 rounded">
        <p className="text-white">User: {session?.user?.email}</p>
      </div>
    </div>
  );
}
