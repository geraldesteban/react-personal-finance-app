import { useState } from "react";
import Heading from "../../ui/Heading";
import BudgetsAddNewBudget from "./BudgetsAddNewBudget";
import BudgetsList from "./BudgetsList";
import BudgetsSpendingSummary from "./BudgetsSpendingSummary";

export default function BudgetsLayout() {
  const [active, setActive] = useState(false);

  return (
    <div className="m-10 lg:m-5">
      <div className="flex justify-between items-center">
        <Heading>Budgets</Heading>
        <button
          className="font-myFontBold text-[14px] text-white bg-grey-900 p-4 rounded-xl transition duration-500 hover:bg-grey-500 lg:hover:bg-grey-900"
          onClick={() => setActive(true)}
        >
          + Add New Budget
        </button>
      </div>
      <div className="grid grid-cols-2 gap-10 mt-10 rounded-xl lg:grid-cols-1">
        <div>
          <BudgetsSpendingSummary />
        </div>
        <div className="grid grid-cols-1 gap-10">
          <BudgetsList />
        </div>
      </div>
      <BudgetsAddNewBudget active={active} onClose={() => setActive(false)} />
    </div>
  );
}
