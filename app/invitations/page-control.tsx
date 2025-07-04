export default function PageControl({
  page,
  nextPage,
}: {
  page: number;
  nextPage: () => void;
}) {
  return (
    <div className="mt-5 flex w-full flex-col items-center justify-center">
      <button
        className="bg-orange-accent cursor-pointer rounded-3xl px-4 py-2 select-none"
        onClick={nextPage}
      >
        {page === 3 ? 'Done' : 'Next'}
      </button>
      <div className="mt-3 flex flex-row items-center gap-1">
        <Indicator active={page === 1} />
        <Indicator active={page === 2} />
        <Indicator active={page === 3} />
      </div>
    </div>
  );
}

function Indicator({ active }: { active: boolean }) {
  return (
    <div className="flex h-3 w-3 items-center justify-center">
      <div
        className={` rounded-full transition-all duration-200
          ${active ? 'size-3 bg-orange-accent' : 'size-2 bg-white'} `}
      />
    </div>
  );
}
