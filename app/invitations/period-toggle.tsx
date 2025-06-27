'use client';

import React from 'react';

export default function PeriodToggle() {
  return (
    <div className="flex flex-row gap-4">
      <RadioButton
        name="period"
        value={Period.Summer}
        label="Summer Period"
        defaultChecked
      />
      <RadioButton name="period" value={Period.Autumn} label="Autumn Period" />
    </div>
  );
}

function RadioButton({
  name,
  value,
  label,
  defaultChecked,
}: {
  name: string;
  value: string;
  label: string;
  defaultChecked?: boolean;
}) {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        className="sr-only peer"
      />
      <span
        className="peer-checked:bg-white peer-checked:text-black bg-black text-white border
          border-white rounded-3xl px-4 py-2 font-bold transition-colors duration-200
          hover:cursor-pointer"
      >
        {label}
      </span>
    </label>
  );
}

enum Period {
  Summer = 'Summer',
  Autumn = 'Autumn',
}
