import { PulseLoader } from "react-spinners";

export default function Loading({ loading }: { loading: boolean }) {
    return (
        <div
            className={`items-center justify-center
                bg-[#5e5e5e76] fixed 
                backdrop-blur-xs
                z-50
                inset-0 ${loading ? "flex" : "hidden"}
                flex-col space-y-5
                text-white
                `}
        >
            <PulseLoader color="white" />
            <p>OAuth integration here ...</p>
        </div>
    );
}