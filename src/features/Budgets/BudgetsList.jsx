import { useState } from "react";
import Ellipsis from "../../assets/icon-ellipsis.svg?react";
import BudgetsEditBudget from "./BudgetsEditBudget";
import BudgetsDeleteBudget from "./BudgetsDeleteBudget";
import BudgetsLatestSpendings from "./BudgetsLatestSpendings";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../ui/Spinner";
import { useReadBudgets } from "./useReadBudgets";
import BudgetsSpentRemaining from "./BudgetsSpentRemaining";

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
              {/* Spent and Remaining */}
              <BudgetsSpentRemaining activeBudgetName={budgets.budgetName} />
              {/* Latest Spendings */}
              <BudgetsLatestSpendings activeBudgetName={budgets.budgetName} />
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
