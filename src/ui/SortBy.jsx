import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import CaretDown from "../assets/icon-caret-down.svg?react";
import SortMobile from "../assets/icon-sort-mobile.svg?react";

export default function SortBy() {
  const [active, setActive] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "latest";

  function handleSetSortBy(sort) {
    setSearchParams({ sortBy: sort });
    setActive(false);
  }

  const sortOptions = [
    { label: "Latest", value: "latest" },
    { label: "Oldest", value: "oldest" },
    { label: "A to Z", value: "a_to_z" },
    { label: "Z to A", value: "z_to_a" },
    { label: "Highest", value: "highest" },
    { label: "Lowest", value: "lowest" },
  ];

  return (
    <div className="flex items-center mr-5 md:mr-2">
      <h2 className="font-myFontRegular text-grey-500 text-[14px] mr-3 sm:hidden whitespace-nowrap">
        Sort by
      </h2>
      <div className="relative">
        <button
          className="flex items-center px-6 py-3 border border-beige-500 rounded-xl sm:px-0 sm:py-0 sm:border-none"
          onClick={() => setActive(!active)}
        >
          <span className="font-myFontRegular whitespace-nowrap text-grey-900 text-[14px] mr-5 sm:hidden sm:mr-0">
            {sortBy
              .replaceAll("_", " ")
              .replace(/\b\w/g, (char) => char.toUpperCase())}
          </span>
          <CaretDown
            className={`${active ? "rotate-[-180deg]" : ""} sm:hidden`}
          />
          <SortMobile className="hidden sm:block" />
        </button>
        <div
          className={`absolute px-6 py-3 bg-white mt-5 w-full rounded-xl shadow-2xl ${
            active ? "" : "hidden"
          } sm:w-fit sm:right-0`}
        >
          <div>
            <h2 className="text-[#696868] mb-2 hidden sm:block">Sort by</h2>
            <hr className="mb-2 hidden sm:block" />
          </div>
          <div>
            {sortOptions.map((option, index) => (
              <div key={option.value}>
                <button
                  className="mb-2"
                  onClick={() => handleSetSortBy(option.value)}
                >
                  {option.label}
                </button>
                {index < sortOptions.length - 1 && <hr className="mb-2" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
