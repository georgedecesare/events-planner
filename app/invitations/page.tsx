'use client';

import PeriodToggle from "./period-toggle";
import Query1Page from "./query1";
import PageControl from "./page-control";
import React from "react";
import Query2Page from "./query2";
import Query3Page from "./query3";

export default function InvitationPage() {
    const [page, changePage] = React.useState(1);

    function nextPage() {
        if (page < 3) {
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
                <div className="flex-1">
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
                </div>
                <PageControl page={page} nextPage={nextPage} />
            </div>
        </div>
    );
}