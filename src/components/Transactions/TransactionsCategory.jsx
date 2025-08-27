import { useState } from "react";
import CaretDown from "../../assets/icon-caret-down.svg?react";
import FilterMobile from "../../assets/icon-filter-mobile.svg?react";

export default function TransactionsCategory() {
  const [active, setActive] = useState(false);

  return (
    <div className="flex items-center">
      <h2 className="font-myFontRegular text-grey-500 text-[14px] mr-3 sm:hidden sm:mr-0">
        Category
      </h2>
      <div className="relative">
        <button
          className="flex items-center px-6 py-3 border border-beige-500 rounded-xl transition duration-500 hover:border-grey-900 focus:border-grey-900 sm:px-0 sm:py-0 sm:border-none"
          onClick={() => setActive(!active)}
        >
          <span className="font-myFontRegular text-grey-900 text-[14px] mr-5 sm:hidden sm:mr-0">
            All Transactions
          </span>
          <CaretDown
            className={`${active ? "rotate-[-180deg]" : ""} sm:hidden`}
          />
          <FilterMobile className="hidden sm:block" />
        </button>
        <div
          className={`absolute px-6 py-3 bg-white mt-5 w-full rounded-xl shadow-2xl ${
            active ? "" : "hidden"
          } sm:w-fit sm:right-0`}
        >
          <div>
            <h2 className="text-grey-500 mb-2 hidden sm:block">Category</h2>
            <hr className="mb-2 hidden sm:block" />
          </div>
          <div>
            <h2 className="mb-2 font-bold">All Transactions</h2>
            <hr className="mb-2" />
          </div>
          <div>
            <h2 className="mb-2">Entertainment</h2>
            <hr className="mb-2" />
          </div>
          <div>
            <h2 className="mb-2">Bills</h2>
            <hr className="mb-2" />
          </div>
          <div>
            <h2 className="mb-2">Groceries</h2>
            <hr className="mb-2" />
          </div>
          <div>
            <h2 className="mb-2">Dining Out</h2>
            <hr className="mb-2" />
          </div>
          <div>
            <h2 className="mb-2">Transportation</h2>
            <hr className="mb-2" />
          </div>
          <div>
            <h2 className="mb-2">Personal Care</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
