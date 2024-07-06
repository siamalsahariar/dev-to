// middleware.js or _middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  // Example: Redirect all requests to home
  return NextResponse.redirect(new URL('/', request.url));
}
