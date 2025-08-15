import { NextResponse } from "next/server";

export function middleware(request) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/news/:path*", "/about/:path*", "/contact/:path*"],
};
// The matcher specifies which paths this middleware should apply to.
// In this case, it applies to all paths under /news, /about, and /contact.

// If you want to add more functionality, you can modify the request or response here.
// For example, you could log the request details, modify headers, or redirect requests.

// Remember to test the middleware to ensure it behaves as expected in your application.
// You can add console logs or other debugging tools to verify its functionality during development.
// This middleware is a good starting point for adding custom logic to your Next.js application.
// You can expand it as needed based on your application's requirements.
