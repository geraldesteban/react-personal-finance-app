import OverviewBalanceIncomeExpenses from "./OverviewBalanceIncomeExpenses";
import OverviewPots from "./OverviewPots";
import OverviewTransactions from "./OverviewTransactions";
import OverviewBudgets from "./OverviewBudgets";
import OverviewRecurringBills from "./OverviewRecurringBills";
import Heading from "../Heading";

export default function OverviewLayout() {
  return (
    <div className="m-10 lg:m-5">
      <Heading>Overview</Heading>
      <OverviewBalanceIncomeExpenses />
      <div className="flex gap-5 lg:flex-col">
        <div className="grid grid-rows-1 flex-1 gap-5 flex-wrap">
          <OverviewPots />
          <OverviewTransactions />
        </div>
        <div className="grid grid-rows-2 flex-1 gap-5 flex-wrap lg:flex-col">
          <OverviewBudgets />
          <OverviewRecurringBills />
        </div>
      </div>
    </div>
  );
}
