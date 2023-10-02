export interface Result {
  pageid: string;
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
}

export interface SearchResult {
  query: {
    pages?: Result[];
  };
}
