import { signIn } from '@/auth';
import SignupButton from './button';
import Image from 'next/image';

async function signInWithGoogle() {
  'use server';
  await signIn('google');
}

export default async function SignInWithGoogle() {
  return (
    <form action={signInWithGoogle}>
      <SignupButton
        leading={
          <Image src="/google.svg" alt="Google Icon" width={18} height={18} />
        }
        text="Sign in with Google"
        type="submit"
      />
    </form>
  );
}
