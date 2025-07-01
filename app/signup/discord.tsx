import { signIn } from '@/lib/auth';
import SignupButton from './button';
import Image from 'next/image';

async function signInWithDiscord() {
  'use server';
  await signIn('discord', {
    redirect: true,
    redirectTo: '/invitations',
  });
}

export default async function SignInWithDiscord() {
  return (
    <form action={signInWithDiscord}>
      <SignupButton
        leading={
          <Image src="/discord.svg" alt="Discord Icon" width={18} height={18} />
        }
        text="Sign in with Discord"
        type="submit"
      />
    </form>
  );
}
