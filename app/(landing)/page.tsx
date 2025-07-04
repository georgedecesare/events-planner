'use client';

import PeriodToggle from './period-toggle';
import Query1Page from './query1';
import PageControl from './page-control';
import React from 'react';
import Query2Page from './query2';
import Query3Page from './query3';
import { motion, AnimatePresence } from 'framer-motion';

export default function InvitationPage() {
  const [page, changePage] = React.useState(1);

  function nextPage() {
    if (page < 3) {
      changePage(page + 1);
    }
  }

  return (
    <div className="container mx-auto flex h-screen h-svh w-screen flex-col px-5 pt-10 pb-5">
      <h1 className="text-2xl font-extrabold mb-5">Dashboard</h1>
      <PeriodToggle />
      <div
        className="flex min-w-full flex-1 flex-col rounded-lg border-1 border-white p-5 mt-5
          max-h-svh"
      >
        <div className="relative h-full overflow-hidden">
          <AnimatePresence initial={false} mode="sync">
            <motion.div
              key={page}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
              }}
              className="absolute inset-0 h-full w-full flex flex-col"
            >
              {(() => {
                switch (page) {
                  case 1:
                    return <Query1Page />;
                  case 2:
                    return <Query2Page />;
                  case 3:
                    return <Query3Page />;
                  default:
                    return null;
                }
              })()}
            </motion.div>
          </AnimatePresence>
        </div>
        <PageControl page={page} nextPage={nextPage} />
      </div>
    </div>
  );
}
