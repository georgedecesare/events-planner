import 'material-symbols';

export default function Query3Page() {
  return (
    <>
      <h2 className="text-lg font-extrabold">Last question!</h2>
      <p className="text-sm font-light">
        Remove any weeks you can&apos;t make.
      </p>
      <br />
      <div className="overflow-y-scroll max-h-full pb-20">
        <Weeks month="July" />
        <Weeks month="August" />
      </div>
    </>
  );
}

function Weeks({ month }: { month: string }) {
  return (
    <div className="mb-10">
      <p className="text-orange-accent font-bold">{month}</p>
      <hr className="mb-5 mt-1" />
      <Week start={30} end={6} />
      <Week start={7} end={13} />
      <Week start={14} end={20} />
      <Week start={21} end={27} />
    </div>
  );
}

function Week({ start, end }: { start: number; end: number }) {
  return (
    <div className="flex flex-row gap-5 items-center">
      <WeekCheckbox />
      <div
        className="rounded-xs flex flex-row border-white border-1 mt-2 p-2 justify-between gap-3
          items-center flex-1"
      >
        <div className="flex flex-col items-center justify-center w-16">
          <span className="font-semibold mb-[-5] text-lg">MON</span>
          <span className="text-sm text-footnote font-light">{start}</span>
        </div>
        <hr className="block flex-1" />
        <div className="flex flex-col items-center justify-center w-16">
          <span className="font-semibold mb-[-5] text-lg">SUN</span>
          <span className="text-sm text-footnote font-light">{end}</span>
        </div>
      </div>
    </div>
  );
}

function WeekCheckbox() {
  return (
    <label className="relative block">
      <input
        type="checkbox"
        className="peer block appearance-none border-white border-1 size-8 rounded-full
          cursor-pointer checked:bg-orange-accent checked:border-none"
      />
      <span
        className="material-symbols-outlined text-white text-[16px] absolute left-1 top-1
          pointer-events-none select-none not-peer-checked:hidden!
          peer-checked:inline-block"
      >
        close
      </span>
    </label>
  );
}
