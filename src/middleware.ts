import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Temporary guest mode: do not redirect visitors to login.
export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ['/create/:path*', '/decks/:path*'],
};
