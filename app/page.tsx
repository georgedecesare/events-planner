import 'material-symbols';
import SignOutButton from './signoutbutton';
import { auth } from '@/lib/auth';

export default async function Home() {
  const session = await auth();
  const user = session!.user!;
  return (
    <div
      className="grid min-h-full grid-rows-[20px_1fr_20px] items-center justify-items-center
        gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20"
    >
      <h1 className="text-xl font-bold">Welcome, {user.name!}</h1>
      <SignOutButton />
    </div>
  );
}
