import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
    publicRoutes: ['/', '/sign-in', '/review', '/recenzije', '/galerija']
});
 
export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};