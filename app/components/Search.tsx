"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");

    router.push(`/${search}`);
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        className="bg-white p-2 w-80 text-xl rounded-xl text-black"
        placeholder="Search"
      />
      <button
        type="submit"
        className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold"
      >
        🚀
      </button>
    </form>
  );
}
