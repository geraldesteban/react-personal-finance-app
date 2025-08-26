import React, { useState } from "react";
import CaretDown from "../../assets/icon-caret-down.svg?react";
import SortMobile from "../../assets/icon-sort-mobile.svg?react";

export default function RecurringBillsSortby() {
  const [active, setActive] = useState(false);

  return (
    <div className="flex items-center mr-5">
      <h2 className="text-grey-500 text-[14px] mr-3 sm:hidden">Sort by</h2>
      <div className="relative">
        <button
          className="flex items-center px-6 py-3 border border-grey-900 rounded-xl sm:px-0 sm:py-0 sm:border-none"
          onClick={() => setActive(!active)}
        >
          <span className="text-grey-900 text-[14px] mr-5 sm:hidden sm:mr-0">
            Latest
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
            <h2 className="mb-2 font-bold">Latest</h2>
            <hr className="mb-2" />
          </div>
          <div>
            <h2 className="mb-2">Oldest</h2>
            <hr className="mb-2" />
          </div>
          <div>
            <h2 className="mb-2">A to Z</h2>
            <hr className="mb-2" />
          </div>
          <div>
            <h2 className="mb-2">Z to A</h2>
            <hr className="mb-2" />
          </div>
          <div>
            <h2 className="mb-2">Highest</h2>
            <hr className="mb-2" />
          </div>
          <div>
            <h2 className="mb-2">Lowest</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
