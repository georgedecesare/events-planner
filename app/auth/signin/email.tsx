'use server';

import { signIn } from '@/lib/auth';

async function signInWithEmail(formData: FormData) {
  'use server';
  const email = formData.get('email') as string;
  const next = (formData.get('next') as string) || '/';
  await signIn('email', {
    redirect: true,
    redirectTo: next,
    email,
  });
}

export default async function Email() {
  return (
    <form action={signInWithEmail}>
      <TextInput type="email" placeholder="email@domain.com" name="email" />
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
  name,
}: {
  type?: string;
  placeholder?: string;
  name?: string;
}) {
  return (
    <div className="mb-4 flex flex-col">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500
          focus:outline-none mt-5"
      />
    </div>
  );
}
