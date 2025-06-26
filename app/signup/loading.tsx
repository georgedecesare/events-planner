import { PulseLoader } from 'react-spinners';

export default function Loading({ loading }: { loading: boolean }) {
  return (
    <div
      className={`fixed inset-0 z-50 items-center justify-center bg-[#5e5e5e76] backdrop-blur-xs ${loading ? 'flex' : 'hidden'} flex-col space-y-5 text-white`}
    >
      <PulseLoader color="white" />
      <p>OAuth integration here ...</p>
    </div>
  );
}
