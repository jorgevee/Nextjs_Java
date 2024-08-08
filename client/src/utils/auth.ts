import { NextAuthOptions, getServerSession } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import apiAuthSignIn from "./api";
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials:
          | Record<"email" | "username" | "password", string>
          | undefined
      ) {
        if (!credentials) {
          throw new Error("Invalid credentials");
        }
        const user = await apiAuthSignIn(credentials);
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = user?.accessToken;
      }
      return user as JWT;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // Maximum session age in seconds (30 days)
  },

  pages: {
    // signIn: "/auth/signin",
  },
  jwt: {
    secret: process.env.NEXT_JWT_SECRET as string,
  },
  secret: process.env.NEXTAUTH_SECRET as string,
};
/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
