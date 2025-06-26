'use client';

import PeriodToggle from "./period-toggle";
import Query1Page from "./query1";
import PageControl from "./page-control";
import React from "react";
import Query2Page from "./query2";
import Query3Page from "./query3";
import { motion, AnimatePresence } from "framer-motion";

export default function InvitationPage() {
    const [page, changePage] = React.useState(1);
    const [direction, setDirection] = React.useState(1); // 1 for forward, -1 for backward

    function nextPage() {
        if (page < 3) {
            setDirection(1);
            changePage(page + 1);
        }
    }

    return (
        <div className="container flex flex-col mx-auto pb-5 px-5 pt-10 w-screen h-screen">
            <h1 className="text-2xl font-extrabold">Your Invitations</h1>
            <br />
            <PeriodToggle />
            <br />
            <div className="rounded-lg min-w-full flex-1
                border-white border-1 p-5 flex flex-col
                ">
                <div className="flex-1 relative overflow-hidden">
                    <AnimatePresence initial={false} mode="sync">
                        <motion.div
                            key={page}
                            initial={{ x: direction * 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: direction * -300, opacity: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                            }}
                            className="absolute inset-0 w-full h-full"
                        >
                            {
                                (() => {
                                    switch (page) {
                                        case 1: return <Query1Page />;
                                        case 2: return <Query2Page />;
                                        case 3: return <Query3Page />;
                                        default: return null;
                                    }
                                })()
                            }
                        </motion.div>
                    </AnimatePresence>
                </div>
                <PageControl page={page} nextPage={nextPage} />
            </div>
        </div>
    );
}