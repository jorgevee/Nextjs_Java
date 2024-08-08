import SignUpForm from "./signUpForm";
import { getServerAuthSession } from "@/utils/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Sign Up Page",
  description: "Sign up for our app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function SignUpPage() {
  const session = await getServerAuthSession();

  if (session) {
    redirect("/dashboard");
  }
  return (
    <div>
      Hi There
      <div>
        <SignUpForm />
      </div>
    </div>
  );
}
