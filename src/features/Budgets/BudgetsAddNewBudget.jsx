import { useState } from "react";
import { useCreateBudget } from "./useCreateBudget";
import CloseModal from "../../assets/icon-close-modal.svg?react";
import SelectThemeColor from "../../ui/SelectThemeColor";
import SelectBudgetCategory from "../../ui/SelectBudgetCategory";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../ui/Spinner";

export default function BudgetsAddNewBudget({ active, onClose }) {
  const { createBudget, isBudget, budgetError } = useCreateBudget(onClose);
  const [budgetName, setBudgetName] = useState("Entertainment");
  const [maximumSpend, setMaximumSpend] = useState(0);
  const [budgetThemeColor, setBudgetTheme] = useState("bg-green");

  function handleCreateBudget(e) {
    e.preventDefault();

    createBudget({ budgetName, maximumSpend, budgetThemeColor });
    setBudgetName("Entertainment");
    setMaximumSpend(0);
    setBudgetTheme("bg-green");
  }

  if (!active) return null;

  if (isBudget) return <Spinner />;

  if (budgetError) return <ErrorMessage errorMessage={budgetError} />;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative bg-white rounded-xl p-10 z-20 md:p-5 md:mx-10 sm:mx-5">
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-myFontBold text-[32px] text-grey-900 sm:text-[20px]">
            Add New Budget
          </h2>
          <button
            onClick={() => {
              onClose();
              setBudgetName("Entertainment");
              setMaximumSpend(0);
              setBudgetTheme("bg-green");
            }}
          >
            <CloseModal />
          </button>
        </div>
        <p className="font-myFontRegular text-[14px] text-grey-500 mb-5">
          Choose a category to set a spending budget. These categories can help
          you monitor spending.
        </p>
        <form onSubmit={handleCreateBudget}>
          <SelectBudgetCategory
            label={"Category"}
            value={budgetName}
            onChange={(e) => setBudgetName(e.target.value)}
          />
          <label className="block font-myFontBold text-[12px] text-grey-500 font-bold mb-2">
            Maximum Spend
          </label>
          <input
            type="number"
            value={maximumSpend}
            onChange={(e) => setMaximumSpend(Number(e.target.value))}
            placeholder="$"
            className="w-full border border-beige-500 rounded-xl py-2 pl-5 mb-5"
          />
          <SelectThemeColor
            label={"Color Tag"}
            value={budgetThemeColor}
            onChange={(e) => setBudgetTheme(e.target.value)}
          />
          <button
            type="submit"
            className="font-myFontBold text-[14px] text-white w-full py-5 bg-grey-900 rounded-xl  font-bold"
          >
            Add Budget
          </button>
        </form>
      </div>
    </div>
  );
}
