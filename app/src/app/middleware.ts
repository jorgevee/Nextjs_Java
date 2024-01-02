import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Construct the target URL with the base URL and the desired path
  const targetUrl = new URL("/auth/signin", request.nextUrl.origin);

  // Use NextResponse.rewrite to redirect to the target URL
  return NextResponse.rewrite(targetUrl);
}

export const config = {
  matcher: "/dashboard",
};
