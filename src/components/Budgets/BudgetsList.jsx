import { useState } from "react";
import Ellipsis from "../../assets/icon-ellipsis.svg?react";
import CaretRight from "../../assets/icon-caret-right.svg?react";
import BudgetsEditBudget from "./BudgetsEditBudget";
import BudgetsDeleteBudget from "./BudgetsDeleteBudget";

export default function BudgetsList() {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [editModalActive, setEditModalActive] = useState(false);
  const [deleteModalActive, setDeleteModalActive] = useState(false);

  return (
    <div className="flex-1 bg-white rounded-xl p-10">
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-black rounded-full mr-5"></div>
          <h2 className="font-myFontBold text-grey-900 text-[20px]">
            Entertainment
          </h2>
        </div>
        <div className="relative">
          <button onClick={() => setDropdownActive(!dropdownActive)}>
            <Ellipsis className="text-grey-500 h-5 w-5" />
          </button>
          <div
            className={`absolute right-0 bg-white shadow-2xl rounded-xl p-5 w-[145px] ${
              dropdownActive ? "" : "hidden"
            }`}
          >
            <button
              onClick={() => {
                setEditModalActive(true);
                setDropdownActive(false);
              }}
            >
              Edit Budget
            </button>
            <hr className="my-2" />
            <button
              className="text-red"
              onClick={() => {
                setDeleteModalActive(true);
                setDropdownActive(false);
              }}
            >
              Delete Budget
            </button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-myFontRegular text-grey-500 text-[14px] mb-5">
          Maximum of $50.00
        </h2>
        <div className="w-full h-5 rounded-md bg-black"></div>
      </div>
      <div className="flex justify-between items-center my-5">
        <div className="flex flex-1 relative">
          <div className="absolute w-1 h-full bg-green rounded-xl"></div>
          <div className="ml-5">
            <p className="font-myFontRegular text-grey-500 text-[12px]">
              Spent
            </p>
            <p className="font-myFontBold text-grey-900 text-[14px]">$15.00</p>
          </div>
        </div>
        <div className="flex flex-1 relative">
          <div className="absolute w-1 h-full bg-beige-100 rounded-xl"></div>
          <div className="ml-5">
            <p className="font-myFontRegular text-grey-500 text-[12px]">
              Remaining
            </p>
            <p className="font-myFontBold text-grey-900 text-[14px]">$35.00</p>
          </div>
        </div>
      </div>
      <div className="p-5 bg-beige-100 rounded-xl">
        <div className="flex items-center justify-between">
          <h2 className="font-myFontBold">Latest Spending</h2>
          <button className="flex items-center font-myFontRegular text-[#696868] text-[14px] gap-5">
            <span>See All</span>
            <CaretRight />
          </button>
        </div>
        <div className="flex justify-between items-center border-b border-grey-50text-grey-500 py-3">
          <div className="flex items-center">
            <img
              alt="gerald"
              className="w-[40px] h-[40px] rounded-full mr-5 sm:hidden"
            />
            <h2 className="font-myFontBold text-grey-900 text-[12px]">
              James Thomson
            </h2>
          </div>
          <div>
            <p className="text-right font-myFontBold text-grey-900 text-[12px]">
              -$5.00
            </p>
            <p className="font-myFontRegular text-grey-500 text-[12px]">
              11 Aug 2024
            </p>
          </div>
        </div>
      </div>

      {/* Modals */}
      <BudgetsEditBudget
        active={editModalActive}
        onClose={() => setEditModalActive(false)}
      />
      <BudgetsDeleteBudget
        active={deleteModalActive}
        onClose={() => setDeleteModalActive(false)}
      />
    </div>
  );
}
