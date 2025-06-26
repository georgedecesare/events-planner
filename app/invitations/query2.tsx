'use client';

import React from 'react';

export default function Query2Page() {
  return (
    <div>
      <h2 className="text-lg font-extrabold">Almost there!</h2>
      <p className="text-sm font-light">
        Please select the days of the week you&apos;ll prefer to attend an
        event.
      </p>
      <br />
      <div className="flex flex-col gap-2">
        <Day name="Monday" />
        <Day name="Tuesday" />
        <Day name="Wednesday" />
        <Day name="Thursday" />
        <Day name="Friday" />
        <Day name="Saturday" />
        <Day name="Sunday" />
      </div>
    </div>
  );
}

function Day({ name }: { name: string }) {
  const [active, setActive] = React.useState(false);
  return (
    <div
      className={`text-md flex w-full cursor-pointer items-center justify-center rounded-sm py-4 text-white transition-all duration-200 ease-in-out select-none ${active ? 'bg-selected' : 'bg-gray-container'}`}
      onClick={() => setActive(!active)}
    >
      {name}
    </div>
  );
}
