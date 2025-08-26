import { useState } from "react";
import SearchIcon from "../../assets/icon-search.svg?react";

export default function RecurringBillsSearch() {
  const [query, setQuery] = useState("");

  function getQuery(e) {
    setQuery(e.target.value);
  }

  return (
    <form className="relative w-64 sm:w-40">
      <input
        className="w-full py-2.5 pl-5 border border-grey-500 rounded-lg"
        type="search"
        placeholder="Search bills"
        value={query}
        onChange={getQuery}
      />
      <SearchIcon className="absolute inset-y-4 right-5 flex items-center text-grey-900" />
    </form>
  );
}
