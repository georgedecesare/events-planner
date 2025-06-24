export default function PageControl({page, nextPage}: {page: number, nextPage: () => void}) {
    return (
        <div className="w-full flex flex-col justify-center items-center mt-5">
            <button className="bg-selected py-2 px-4
                rounded-3xl cursor-pointer select-none"
                onClick={nextPage}
            >
                Next
            </button>
            <div className="flex flex-row gap-1 mt-3 items-center">
                <Indicator active={page === 1} />
                <Indicator active={page === 2} />
                <Indicator active={page === 3} />
            </div>
        </div>
    );
}

function Indicator({active}: {active: boolean}) {
    return (
        <div className="flex items-center justify-center w-3 h-3">
            <div className={`rounded-full ${active ? "w-3 h-3" : "w-2 h-2"}
                ${active ? "bg-selected" : "bg-white"}`}
            />
        </div>
    );
}