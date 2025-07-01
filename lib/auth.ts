import NextAuth from 'next-auth';
import authConfig from '@/lib/auth.config';
import Resend from 'next-auth/providers/resend';
import sendVerificationRequest from '@/lib/email';

import { PrismaClient } from '@prisma/client';
import { PrismaAdapter } from '@auth/prisma-adapter';

const prisma = new PrismaClient();

const combinedProviders = [
  ...authConfig.providers,
  Resend({
    from: process.env.RESEND_FROM_ADDR!,
    apiKey: process.env.RESEND_API_KEY!,
    sendVerificationRequest: sendVerificationRequest,
    maxAge: 60 * 60 * 24, // Email link will expire in 24 hours
    id: 'email',
    name: 'Email',
  }),
];

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: combinedProviders,
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
});
