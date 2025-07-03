import SignupButton from './button';
import Image from 'next/image';
import { signIn } from '@/lib/auth';

export default function SignInForm({
  method,
  next,
}: {
  method: 'google' | 'discord';
  next: string;
}) {
  async function signInAction() {
    'use server';
    let safeNext = next;
    try {
      new URL(next, 'https://example.com'); // Validate URL
    } catch (error) {
      console.error(error);
      safeNext = '/';
    }
    console.log(next);
    console.log(`Redirecting to ${safeNext} after next ${next}`);
    await signIn('google', {
      redirect: true,
      redirectTo: safeNext,
    });
  }

  return (
    <form action={signInAction}>
      <SignupButton
        leading={
          <Image
            src={`/${method}.svg`}
            alt={`${method} icon`}
            width={18}
            height={18}
          />
        }
        text={`Sign in with ${method.charAt(0).toUpperCase() + method.slice(1)}`}
        type="submit"
      />
    </form>
  );
}
