import { useRef, useState } from "react";
import CaretDown from "../../assets/icon-caret-down.svg?react";
import FilterMobile from "../../assets/icon-filter-mobile.svg?react";
import { useSearchParams } from "react-router-dom";
import useClickOutside from "../../hooks/useClickOutside";

export default function TransactionsCategory() {
  const [active, setActive] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("categoryBy") || "all_transactions";

  const ref = useRef(null);
  useClickOutside(ref, () => setActive(false));

  function handleSetCategory(newCategory) {
    const params = new URLSearchParams(searchParams);
    params.set("categoryBy", newCategory);
    setSearchParams(params);
    setActive(false);
  }

  return (
    <div className="flex items-center">
      <h2 className="font-myFontRegular text-grey-500 text-[14px] mr-3 sm:hidden sm:mr-0">
        Category
      </h2>
      <div className="relative" ref={ref}>
        <button
          className="flex items-center px-6 py-3 border border-beige-500 rounded-xl transition duration-500 hover:border-grey-900 focus:border-grey-900 sm:px-0 sm:py-0 sm:border-none md:px-3 md:py-[10px]"
          onClick={() => setActive(!active)}
        >
          <span className="font-myFontRegular whitespace-nowrap text-grey-900 text-[14px] mr-5 sm:hidden sm:mr-0">
            {category
              .replaceAll("_", " ")
              .replace(/\b\w/g, (char) => char.toUpperCase())}
          </span>
          <CaretDown
            className={`${active ? "rotate-[-180deg]" : ""} sm:hidden`}
          />
          <FilterMobile className="hidden sm:block" />
        </button>
        {active && (
          <div
            className={`absolute px-6 py-3 bg-white mt-5 w-[170px] rounded-xl shadow-2xl ${
              active ? "" : "hidden"
            } right-0 sm:w-fit sm:right-0`}
          >
            <div>
              <h2 className="text-grey-500 mb-2 hidden sm:block">Category</h2>
              <hr className="mb-2 hidden sm:block" />
            </div>
            <div>
              <button
                className="mb-2 font-bold whitespace-nowrap"
                onClick={() => handleSetCategory("all_transactions")}
              >
                All Transactions
              </button>
              <hr className="mb-2" />
            </div>
            <div>
              <button
                className="mb-2"
                onClick={() => handleSetCategory("entertainment")}
              >
                Entertainment
              </button>
              <hr className="mb-2" />
            </div>
            <div>
              <button
                className="mb-2"
                onClick={() => handleSetCategory("bills")}
              >
                Bills
              </button>
              <hr className="mb-2" />
            </div>
            <div>
              <button
                className="mb-2"
                onClick={() => handleSetCategory("groceries")}
              >
                Groceries
              </button>
              <hr className="mb-2" />
            </div>
            <div>
              <button
                className="mb-2"
                onClick={() => handleSetCategory("dining_out")}
              >
                Dining Out
              </button>
              <hr className="mb-2" />
            </div>
            <div>
              <button
                className="mb-2"
                onClick={() => handleSetCategory("transportation")}
              >
                Transportation
              </button>
              <hr className="mb-2" />
            </div>
            <div>
              <button
                className="mb-2"
                onClick={() => handleSetCategory("personal_care")}
              >
                Personal Care
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
