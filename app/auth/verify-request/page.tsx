export default function VerifyRequestPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center m-5 py-20 w-full bg-gray-container p-10 rounded-2xl md:w-1/3">
        <h1 className="text-2xl font-bold mb-4">Check your email</h1>
        <p>
          We have sent you an email with a link to verify your account. Please
          check your inbox and click the link to continue.
          <br />
          <br />
          Please also check your junk/spam folder.
        </p>
      </div>
    </div>
  );
}
