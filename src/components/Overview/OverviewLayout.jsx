import OverviewBalanceIncomeExpenses from "./OverviewBalanceIncomeExpenses";
import OverviewPots from "./OverviewPots";
import OverviewTransactions from "./OverviewTransactions";
import OverviewBudgets from "./OverviewBudgets";
import OverviewRecurringBills from "./OverviewRecurringBills";
import Heading from "../Heading";

export default function OverviewLayout() {
  return (
    <>
      <Heading>Overview</Heading>
      <div className="flex justify-between items-stretch gap-6 flex-wrap mt-10">
        {/* Current Balance, Income, and Expenses */}
        <div className="flex flex-1 gap-6 lg:flex-wrap sm:flex-col">
          <OverviewBalanceIncomeExpenses />
        </div>
      </div>
      <div className="flex justify-between items-stretch gap-6 flex-wrap mt-6 lg:flex-col">
        {/* Overview Pots*/}
        <OverviewPots />
        {/* Overview Budgets */}
        <OverviewBudgets />
      </div>
      <div className="flex justify-between items-stretch gap-6 flex-wrap mt-6 lg:flex-col">
        {/* Overview Transactions */}
        <OverviewTransactions />
        {/* Overview Recurring Bills */}
        <OverviewRecurringBills />
      </div>
    </>
  );
}
