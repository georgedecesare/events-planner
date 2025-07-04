'use client';

import React from 'react';

export default function Query2Page() {
  return (
    <>
      <h2 className="text-lg font-extrabold">Almost there!</h2>
      <p className="text-sm font-light">
        Please select the days of the week you&apos;ll prefer to attend an
        event.
      </p>
      <br />
      <div className="flex flex-col gap-2 overflow-scroll">
        <Day name="Monday" />
        <Day name="Tuesday" />
        <Day name="Wednesday" />
        <Day name="Thursday" />
        <Day name="Friday" />
        <Day name="Saturday" />
        <Day name="Sunday" />
      </div>
    </>
  );
}

function Day({ name }: { name: string }) {
  return (
    <label
      className="text-md flex w-full cursor-pointer items-center justify-center rounded-sm py-4
        text-white transition-all duration-200 ease-in-out select-none bg-gray-container
        has-checked:bg-orange-accent"
    >
      {name}
      <input type="checkbox" className="hidden" name={name.toLowerCase()} />
    </label>
  );
}
