import { useEffect, useState } from "react";
import SearchIcon from "../../assets/icon-search.svg?react";
import { useSearchParams } from "react-router-dom";

export default function RecurringBillsSearch() {
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const search = searchParams.get("search") || "";
    setQuery(search);
  }, [searchParams]);

  function getQuery(e) {
    setQuery(e.target.value);
    setSearchParams({ search: e.target.value });
  }

  return (
    <form className="relative w-64 mr-10 lg:w-96 sm:w-72 sm:mr-5">
      <input
        className="font-myFontRegular text-[14px] w-full py-2.5 pl-5 border border-beige-500 rounded-lg outline-none"
        type="search"
        placeholder="Search bills"
        value={query}
        onChange={getQuery}
      />
      <SearchIcon className="absolute inset-y-4 right-5 flex items-center text-grey-900" />
    </form>
  );
}
