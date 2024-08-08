import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
// import { verifyToken } from "./auth"; // Assuming you have an authentication function

export function middleware(req: NextRequest, event: NextFetchEvent) {
  try {
    const token = req.cookies.get("next-auth.session-token");
    if (!token?.value) {
      // Authentication failed
      return NextResponse.redirect(new URL("/auth/login", req.url)); // Redirect to login
    }

    // Authentication successful, continue to the requested page
    return NextResponse.next();
  } catch (error) {
    // Handle authentication errors
    console.error("Authentication error:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred during authentication." },
      { status: 401 }
    );
  }
}

export const config = {
  matcher: "/dashboard/:path",
};
