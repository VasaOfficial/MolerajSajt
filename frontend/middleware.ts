import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: [
    '/',
    '/sign-in',
    '/review_form',
    '/recenzije',
    '/galerija',
  ],
});

export const config = {
  matcher: ['/admin_interface'],
};
