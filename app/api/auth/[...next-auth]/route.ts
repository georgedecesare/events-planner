import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import GoogleProvider from 'next-auth/providers/google';

// It's best practice to instantiate Prisma Client outside the handler
// to avoid creating too many connections in a serverless environment.
const prisma = new PrismaClient();

const { handlers, auth, signIn, signOut } = NextAuth({
  // Here is the crucial part
  adapter: PrismaAdapter(prisma),

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});

// Export HTTP method handlers for Next.js API routes
export const { GET, POST } = handlers;
export { auth, signIn, signOut };
