import { withAuth } from 'next-auth/middleware';

// Protect study pages — unauthenticated visitors are redirected to /login.
// API auth routes (/api/auth/*) and the API deck routes (enforced in-route)
// are intentionally not matched here.
export default withAuth({
  pages: { signIn: '/login' },
});

export const config = {
  matcher: ['/create/:path*', '/decks/:path*'],
};
