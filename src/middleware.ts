import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Normalize FAQ route casing: redirect any case variant to lowercase /faq
  if (pathname.toLowerCase() === '/faq' && pathname !== '/faq') {
    const url = new URL('/faq', request.url);
    return NextResponse.redirect(url, 308);
  }

  const response = NextResponse.next();

  // Add performance and security headers
  const headers = response.headers;

  // Cache-Control for static assets
  if (request.nextUrl.pathname.startsWith('/_next/static')) {
    headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }

  // Security headers
  headers.set('X-DNS-Prefetch-Control', 'on');
  headers.set('X-Frame-Options', 'SAMEORIGIN');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Performance headers optimized for SEO
  if (!request.nextUrl.pathname.startsWith('/_next/static')) {
    headers.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
  }
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
