import SignInForm from "./signInForm";
export const metadata = {
  title: "Login Page",
  description: "Login page for our app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Welcome Back</h2>
        <SignInForm />
      </div>
    </div>
  );
}
