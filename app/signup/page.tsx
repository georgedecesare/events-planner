'use client';

import { useState } from 'react';
import Image from 'next/image';
import SignupButton from './button';
import Loading from './loading';
import TextInput from './textinput';

export default function Signup() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div
        className="min-h-full min-w-full flex flex-col items-center px-10 pt-10 md:px-[30%] pb-5
          justify-between"
      >
        <div>
          <h1 className="text-center text-2xl font-bold">
            Welcome to our group!
          </h1>
          <p className="justify-center text-center text-sm mt-5">
            Congratulations on being chosen to join a first of its kind social
            group! We&apos;re committed to giving you the best possible
            experience as a gay man here in London.
            <br />
            This platform serves to help us organize our upcoming exciting
            events where you&apos;ll have the opportunity to meet the other
            members of our group in person.
            <br />
            Lets make some fun together! And remember...
            <br />
            <br />
            Down with the appropriation! Our group reveals the truth!
          </p>
        </div>

        <div className="mt-5 w-full">
          <div className="text-center">
            <h2 className="text-lg font-bold text-white">Create an account</h2>
            <p className="text-footnote text-sm">
              Enter your email to sign up for this app
            </p>
          </div>
          <TextInput
            placeholder="email@domain.com"
            onChangeAction={(value) => console.log(value)}
          />
          <div
            className="flex items-center justify-center text-sm hover:cursor-pointer"
            onClick={() => submit(setLoading)}
          >
            Continue
          </div>
        </div>

        <div className="flex min-w-full items-center justify-center mt-5">
          <div className="h-px w-1/2 bg-gray-300">&nbsp;</div>
          <div className="text-footnote px-2">or</div>
          <div className="h-px w-1/2 bg-gray-300">&nbsp;</div>
        </div>

        <div className="w-full">
          <SignupButton
            leading={
              <Image src="/google.svg" alt="Google" width={20} height={20} />
            }
            text="Sign up with Google"
            action={() => console.log('Google sign up clicked')}
          />
          <SignupButton
            leading={
              <Image src="/apple.svg" alt="Apple" width={20} height={20} />
            }
            text="Sign up with Apple"
            action={() => console.log('Apple sign up clicked')}
          />
        </div>

        <footer>
          <p className="text-footnote text-center mt-5">
            By clicking continue, you agree to our{' '}
            <span className="text-blue-600">Terms of Service</span> and{' '}
            <span className="text-blue-600">Privacy Policy</span>.
          </p>
        </footer>
      </div>

      <Loading loading={loading} />
    </>
  );
}

function submit(setLoading: (loading: boolean) => void) {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
    window.location.href = '/invitations/1';
  }, 2000); // Simulate a network request
}
