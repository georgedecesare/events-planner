'use client';

import { useState } from 'react';
import PeriodToggle from './period-toggle';
import AvailabilityForm from './queries-form';

export default function InvitationPage() {
  const [page, changePage] = useState(1);

  function nextPage() {
    if (page < 3) {
      changePage(page + 1);
    }
  }

  return (
    <div className="container mx-auto flex h-screen h-svh w-screen flex-col px-5 pt-10 pb-5">
      <h1 className="text-2xl font-extrabold mb-5">Dashboard</h1>
      <PeriodToggle />
      <AvailabilityForm page={page} nextPage={nextPage} />
    </div>
  );
}
