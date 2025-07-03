import Email from './email';
import ErrorToast from './error_toast';
import SignInForm from './signin_form';

export default async function Signup({
  searchParams,
}: {
  searchParams: { next?: string };
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
          <h1 className="text-center text-2xl font-bold">
            Welcome to our group!
          </h1>
          <p className="justify-center text-center text-sm mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat!
          </p>
        </div>

        <div className="mt-5 w-full">
          <div className="text-center">
            <h2 className="text-lg font-bold text-white">
              Sign In/Create Account
            </h2>
            <p className="text-footnote text-sm">Sign in using your email</p>
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
