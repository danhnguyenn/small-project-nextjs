import React from "react";
import { Result, SearchResult } from "../models/Search";
import getWikiResults from "../lib/getWikiResults";
import Item from "./components/Item";
export interface SearchProps {
  params: {
    searchTerm: string;
  };
}

export async function generateMetadata({
  params: { searchTerm },
}: SearchProps) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const wikiList = await wikiData;
  const displayTerm = searchTerm.replaceAll("%20", " ");

  if (!wikiList.query.pages) {
    return {
      title: `${displayTerm} Not Found`,
    };
  }

  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  };
}

export default async function SearchResults({
  params: { searchTerm },
}: SearchProps) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const wikiList = await wikiData;
  const results: Result[] | undefined = wikiList?.query?.pages;

  const content = (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result) => {
          return <Item key={result.pageid} result={result} />;
        })
      ) : (
        <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
      )}
    </main>
  );

  return content;
}
