'use client';

import React from 'react';

export default function Query1Page() {
  return (
    <div>
      <h2 className="text-lg font-extrabold">Welcome to the Summer Period!</h2>
      <p className="text-sm font-light">
        To get started, please select the months which you are available.
      </p>
      <br />
      <div className="grid w-full grid-cols-2 justify-between gap-4 lg:grid-cols-4">
        <Month name="June" />
        <Month name="July" />
        <Month name="August" />
        <Month name="September" />
      </div>
    </div>
  );
}

function Month({ name }: { name: string }) {
  const [active, setActive] = React.useState(false);
  return (
    <div
      className={`flex aspect-square w-full cursor-pointer items-center justify-center rounded-sm text-2xl font-bold text-white transition-all duration-200 ease-in-out select-none ${active ? 'bg-selected' : 'bg-gray-container'}`}
      onClick={() => setActive(!active)}
    >
      {name}
    </div>
  );
}
