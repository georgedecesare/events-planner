'use server';

import { signIn } from '@/lib/auth';

export default async function Email() {
  return (
    <form action={signInWithEmail}>
      <TextInput
        placeholder="email@domain.com"
        onChangeAction={(value) => console.log(value)}
      />
      <div className="w-full flex items-center justify-center">
        <button
          type="submit"
          className="text-center text-sm hover:cursor-pointer"
        >
          Continue
        </button>
      </div>
    </form>
  );
}

function TextInput({
  type = 'text',
  placeholder,
}: {
  type?: string;
  placeholder?: string;
  onChangeAction: (value: string) => void;
}) {
  return (
    <div className="mb-4 flex flex-col">
      <input
        type={type}
        placeholder={placeholder}
        className="rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500
          focus:outline-none mt-5"
      />
    </div>
  );
}

async function signInWithEmail() {
  'use server';
  await signIn('resend', {
    redirect: true,
    redirectTo: '/invitations',
  });
}
