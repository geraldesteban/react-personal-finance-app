import { useState } from "react";
import SearchIcon from "../../assets/icon-search.svg?react";

export default function TransactionsSearch() {
  const [query, setQuery] = useState("");

  function getQuery(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <form className="relative w-64 mb-10 lg:hidden sm:block">
        <input
          className="font-myFontRegular text-[14px] w-full py-2.5 pl-5 border border-beige-500 rounded-lg outline-none"
          type="search"
          placeholder="Search transaction"
          value={query}
          onChange={getQuery}
        />
        <SearchIcon className="absolute inset-y-4 right-5 flex items-center text-grey-900" />
      </form>
      <form className="relative w-64 mb-10 hidden lg:block lg:w-44 sm:hidden">
        <input
          className="font-myFontRegular text-[14px] w-full py-2.5 pl-5 border border-grey-500 rounded-lg"
          type="search"
          placeholder="Search tran..."
          value={query}
          onChange={getQuery}
        />
        <SearchIcon className="absolute inset-y-4 right-5 flex items-center text-grey-900" />
      </form>
    </>
  );
}
