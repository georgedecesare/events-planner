'use client';

import React from "react";

export default function Query1Page() {
    return (
        <div>
            <h2 className="font-extrabold text-lg">
                Welcome to the Summer Period!
            </h2>
            <p className="text-sm font-light">
                To get started, please select the months which you are available.
            </p>
            <br />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full justify-between">
                <Month name="June" />
                <Month name="July" />
                <Month name="August" />
                <Month name="September" />
            </div>
        </div>
    );
}

function Month({name}: {name: string}) {
    const [active, setActive] = React.useState(false);
    return (
        <div className={`w-full aspect-square flex items-center
            justify-center text-2xl font-bold cursor-pointer select-none
            transition-all duration-200 ease-in-out
            rounded-sm text-white ${active ? "bg-selected" : "bg-gray-container"}`}
            onClick={() => setActive(!active)}
            >
            {name}
        </div>
    );
}