import Image from 'next/image';
import Email from './email';
import ErrorToast from './error_toast';
import SignInForm from './signin_form';

export default async function Signup({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const params = await searchParams;
  const next = params.next ?? '/';
  return (
    <>
      <div
        className="min-h-full min-w-full flex flex-col items-center px-10 pt-10 md:px-[30%] pb-5
          justify-between"
      >
        <div>
          <h1 className="text-center text-3xl/tight font-light">
            The VORDADE
            <br />
            <span className="italic font-extralight">welcomes you</span>
          </h1>
          <Image
            src="/vordade.svg"
            alt="Vordade Logo hero image"
            width={250}
            height={250}
          />
        </div>

        <div className="mt-5 w-full">
          <div className="text-center">
            <h2 className="text-lg font-bold text-white">
              Continue with Email
            </h2>
            <p className="text-footnote text-sm">
              Get an SSO link sent to your email
            </p>
          </div>
          <Email next={next} />
        </div>

        <div className="flex min-w-full items-center justify-center mt-5">
          <div className="h-px w-1/2 bg-gray-300">&nbsp;</div>
          <div className="text-footnote px-2">or</div>
          <div className="h-px w-1/2 bg-gray-300">&nbsp;</div>
        </div>

        <div className="w-full">
          <SignInForm method="google" next={next} />
          <SignInForm method="discord" next={next} />
        </div>

        <footer>
          <p className="text-footnote text-center mt-5">
            By continuing, you agree to our{' '}
            <span className="text-blue-600">Terms of Service</span> and{' '}
            <span className="text-blue-600">Privacy Policy</span>.
          </p>
        </footer>
      </div>
      <ErrorToast />
    </>
  );
}
