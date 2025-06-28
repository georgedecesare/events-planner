import Loading from './loading';
import SignInWithGoogle from './google';
import Email from './email';

export default function Signup() {
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
          <Email />
          <div className="flex items-center justify-center text-sm hover:cursor-pointer">
            Continue
          </div>
        </div>

        <div className="flex min-w-full items-center justify-center mt-5">
          <div className="h-px w-1/2 bg-gray-300">&nbsp;</div>
          <div className="text-footnote px-2">or</div>
          <div className="h-px w-1/2 bg-gray-300">&nbsp;</div>
        </div>

        <div className="w-full">
          <SignInWithGoogle />
        </div>

        <footer>
          <p className="text-footnote text-center mt-5">
            By clicking continue, you agree to our{' '}
            <span className="text-blue-600">Terms of Service</span> and{' '}
            <span className="text-blue-600">Privacy Policy</span>.
          </p>
        </footer>
      </div>

      <Loading loading={false} />
    </>
  );
}
