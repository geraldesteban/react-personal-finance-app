import { useState } from "react";
import Heading from "../Heading";
import BudgetsAddNewBudget from "./BudgetsAddNewBudget";
import BudgetsList from "./BudgetsList";
import BudgetsSpendingSummary from "./BudgetsSpendingSummary";

export default function BudgetsLayout() {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center relative">
        <Heading>Budgets</Heading>
        <button
          className="text-white p-4 font-semibold bg-grey-900 rounded-xl hover:bg-grey-500"
          onClick={() => setActive(true)}
        >
          + Add New Budget
        </button>
      </div>
      <div className="mt-10 rounded-xl flex gap-10 lg:flex-col">
        <BudgetsSpendingSummary />
        <BudgetsList />
      </div>
      <BudgetsAddNewBudget active={active} onClose={() => setActive(false)} />
    </>
  );
}
