import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
    // Rotte pubbliche che non richiedono autenticazione
    publicRoutes: [
        '/',
        '/sign-in',
        '/sign-up',
        '/api/webhook',
        '/api/trpc/(.*)', // Per compatibilità con tRPC
        '/api/uploadthing', // Per compatibilità con UploadThing
    ],
    ignoredRoutes: [
        '/api/webhook',
        '/_next/static/(.*)',
        '/favicon.ico',
    ],
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}; 