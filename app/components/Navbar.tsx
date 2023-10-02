import Link from "next/link";
import React from "react";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav className="p-4 bg-slate-600 drop-shadow-xl flex justify-between">
      <h1 className="text-3xl font-bold text-white">
        <Link href="/" className="no-underline">
          WikiRocket
        </Link>
      </h1>
      <Search />
    </nav>
  );
}
