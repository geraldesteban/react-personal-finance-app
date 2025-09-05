import Heading from "../../ui/Heading";
import OverviewBalanceIncomeExpenses from "./OverviewBalanceIncomeExpenses";
import OverviewTransactions from "./OverviewTransactions";
import OverviewBudgets from "./OverviewBudgets";
import OverviewPots from "./OverviewPots";
import OverviewRecurringBills from "./OverviewRecurringBills";
import AuthenticationLogout from "../Authentication/AuthenticationLogout";

export default function OverviewLayout() {
  return (
    <div className="m-10 lg:m-5">
      <div className="flex justify-between items-center">
        <Heading>Overview</Heading>
        <AuthenticationLogout />
      </div>
      <OverviewBalanceIncomeExpenses />
      <div className="flex gap-5 lg:flex-col">
        <div className="grid grid-rows-1 flex-1 gap-5 flex-wrap">
          <OverviewPots />
          <OverviewTransactions />
        </div>
        <div className="flex flex-col gap-5">
          <OverviewBudgets />
          <OverviewRecurringBills />
        </div>
      </div>
    </div>
  );
}
