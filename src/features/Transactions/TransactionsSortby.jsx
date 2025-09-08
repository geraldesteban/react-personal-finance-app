import { useState } from "react";
import CaretDown from "../../assets/icon-caret-down.svg?react";
import SortMobile from "../../assets/icon-sort-mobile.svg?react";
import { useSearchParams } from "react-router-dom";

export default function TransactionsSortby() {
  const [active, setActive] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "latest";

  function handleSetSortBy(sort) {
    setSearchParams({ sortBy: sort });
    setActive(false);
  }

  return (
    <div className="flex items-center mr-5">
      <h2 className="font-myFontRegular text-grey-500 text-[14px] mr-3 sm:hidden">
        Sort by
      </h2>
      <div className="relative">
        <button
          className="flex items-center px-6 py-3 border border-beige-500 rounded-xl transition duration-500 hover:border-grey-900 focus:border-grey-900 sm:px-0 sm:py-0 sm:border-none"
          onClick={() => setActive(!active)}
        >
          <span className="font-myFontRegular text-grey-900 text-[14px] mr-5 sm:hidden sm:mr-0">
            {sortBy.charAt(0).toUpperCase() + sortBy.slice(1)}
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
            <button
              className="mb-2 font-bold"
              onClick={() => handleSetSortBy("latest")}
            >
              Latest
            </button>
            <hr className="mb-2" />
          </div>
          <div>
            <button className="mb-2" onClick={() => handleSetSortBy("oldest")}>
              Oldest
            </button>
            <hr className="mb-2" />
          </div>
          <div>
            <button className="mb-2" onClick={() => handleSetSortBy("a_to_z")}>
              A to Z
            </button>
            <hr className="mb-2" />
          </div>
          <div>
            <button className="mb-2" onClick={() => handleSetSortBy("z_to_a")}>
              Z to A
            </button>
            <hr className="mb-2" />
          </div>
          <div>
            <button className="mb-2" onClick={() => handleSetSortBy("highest")}>
              Highest
            </button>
            <hr className="mb-2" />
          </div>
          <div>
            <button className="mb-2" onClick={() => handleSetSortBy("lowest")}>
              Lowest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
