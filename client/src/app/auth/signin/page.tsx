import SignInForm from "./signInForm";
export const metadata = {
  title: "Login Page",
  description: "Login page for AP Stocks",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="rounded-lg bg-white p-12 shadow-md">
        <h2 className="mb-4 text-2xl font-medium text-gray-800">
          Welcome Back
        </h2>
        <SignInForm />
      </div>
    </div>
  );
}