import { auth } from '@/lib/auth';

export default auth((req) => {
  if (
    !req.auth &&
    req.nextUrl.pathname !== '/auth/signin' &&
    req.nextUrl.pathname !== '/'
  ) {
    const newUrl = new URL('/auth/signin', req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
