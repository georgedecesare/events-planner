import Query1Page from './query1';
import PageControl from './page-control';
import Query2Page from './query2';
import Query3Page from './query3';
import { motion, AnimatePresence } from 'framer-motion';

interface AvailabilityFormProps {
  page: number;
  nextPage: () => void;
}

export default function AvailabilityForm({
  page,
  nextPage,
}: AvailabilityFormProps) {
  return (
    <form
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
    </form>
  );
}
