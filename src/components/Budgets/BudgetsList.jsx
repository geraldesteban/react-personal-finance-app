import { useState } from "react";
import Ellipsis from "../../assets/icon-ellipsis.svg?react";
import CaretRight from "../../assets/icon-caret-right.svg?react";
import BudgetsEditBudget from "./BudgetsEditBudget";
import BudgetsDeleteBudget from "./BudgetsDeleteBudget";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { useReadBudgets } from "./useReadBudgets";
import { formatCurrency } from "../../utils/formatCurrency";

export default function BudgetsList() {
  const [activeDropDown, setActiveDropDown] = useState(false);
  const [editModalActive, setEditModalActive] = useState(false);
  const [deleteModalActive, setDeleteModalActive] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const { dataBudgets, isDataBudgets, errorDataBudgets } = useReadBudgets();

  function handleEditBudget(id) {
    setActiveId(id);
    setEditModalActive(true);
    setActiveDropDown(false);
  }

  function handleDeleteBudget(id) {
    setActiveId(id);
    setDeleteModalActive(true);
    setActiveDropDown(false);
  }

  if (isDataBudgets) return <Spinner />;

  if (errorDataBudgets) return <ErrorMessage errorMessage={errorDataBudgets} />;

  return (
    <>
      {dataBudgets?.length < 0
        ? null
        : dataBudgets?.map((budgets) => (
            <div
              className="flex-1 bg-white rounded-xl p-10 sm:p-5"
              key={budgets.id}
            >
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center">
                  <div
                    className={`w-4 h-4 ${budgets.budgetThemeColor} rounded-full mr-5`}
                  ></div>
                  <h2 className="font-myFontBold text-grey-900 text-[20px]">
                    {budgets.budgetName}
                  </h2>
                </div>
                <div className="relative">
                  <button
                    onClick={() =>
                      setActiveDropDown(
                        activeDropDown === budgets.id ? false : budgets.id
                      )
                    }
                  >
                    <Ellipsis className="text-grey-500 h-5 w-5" />
                  </button>
                  <div
                    className={`absolute right-0 bg-white shadow-2xl rounded-xl p-5 w-[145px] ${
                      activeDropDown === budgets.id ? false : "hidden"
                    }`}
                  >
                    <button onClick={() => handleEditBudget(budgets.id)}>
                      Edit Budget
                    </button>
                    <hr className="my-2" />
                    <button
                      className="text-red"
                      onClick={() => handleDeleteBudget(budgets.id)}
                    >
                      Delete Budget
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="font-myFontRegular text-grey-500 text-[14px] mb-5">
                  Maximum of {formatCurrency(budgets.maximumSpend)}
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
                    <p className="font-myFontBold text-grey-900 text-[14px]">
                      {formatCurrency(budgets.budgetSpent)}
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 relative">
                  <div className="absolute w-1 h-full bg-beige-100 rounded-xl"></div>
                  <div className="ml-5">
                    <p className="font-myFontRegular text-grey-500 text-[12px]">
                      Remaining
                    </p>
                    <p className="font-myFontBold text-grey-900 text-[14px]">
                      $35.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      <BudgetsEditBudget
        active={editModalActive}
        onClose={() => setEditModalActive(false)}
        budgetId={activeId}
      />
      <BudgetsDeleteBudget
        active={deleteModalActive}
        onClose={() => setDeleteModalActive(false)}
        budgetId={activeId}
      />
    </>
  );
}

/* 
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

*/
