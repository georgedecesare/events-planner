'use client';

import React from 'react';

export default function PeriodToggle() {
  const [activePeriod, setActivePeriod] = React.useState<Period>(Period.Summer);
  return (
    <div className="flex flex-row gap-4">
      <Button
        active={activePeriod == Period.Summer}
        label="Summer Period"
        onClick={() => setActivePeriod(Period.Summer)}
      />
      <Button
        active={activePeriod == Period.Autumn}
        label="Autumn Period"
        onClick={() => setActivePeriod(Period.Autumn)}
      />
    </div>
  );
}

function Button({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      className={`${
        active
          ? 'bg-white text-black'
          : 'border-1 border-white bg-black text-white'
        } rounded-3xl px-4 py-2 font-bold transition-colors duration-200
        hover:cursor-pointer`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

enum Period {
  Summer = 'Summer',
  Autumn = 'Autumn',
}
