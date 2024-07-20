import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
    '/feed(.*)',
    '/profile(.*)',
  ]);

export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect();
});
  
export const config = {
  matcher: ['/', '/login', '/profile', '/feed'],
};