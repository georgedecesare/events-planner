import Google from 'next-auth/providers/google';
import Discord from 'next-auth/providers/discord';
import type { NextAuthConfig } from 'next-auth';

// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
    Discord({
      clientId: process.env.AUTH_DISCORD_ID!,
      clientSecret: process.env.AUTH_DISCORD_SECRET!,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  trustHost: true, // This allows Auth.js to trust the production domain
  pages: {
    signIn: '/signup',
    verifyRequest: '/auth/verify-request', // Custom page for email verification success
  },
} satisfies NextAuthConfig;
