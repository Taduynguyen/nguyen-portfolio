import React from "react";
import { createClient } from "@/prismicio"
import NavBar from "@/components/NavBar";

export default async function Header() {
    const clients = createClient();
    const settings = await clients.getSingle("settings");

    return (
        <header className="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4">
            <NavBar settings={settings} />
        </header>
    );
}