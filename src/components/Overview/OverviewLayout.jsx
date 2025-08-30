import Heading from "../Heading";
import OverviewBalanceIncomeExpenses from "./OverviewBalanceIncomeExpenses";
import OverviewTransactions from "./OverviewTransactions";
import OverviewBudgets from "./OverviewBudgets";
import OverviewPots from "./OverviewPots";
import OverviewRecurringBills from "./OverviewRecurringBills";
import Spinner from "../Spinner";
import { useLogout } from "../Authentication/useLogout";

export default function OverviewLayout() {
  const { logout, isPending } = useLogout();

  return (
    <div className="m-10 lg:m-5">
      <div className="flex justify-between items-center">
        <Heading>Overview</Heading>
        {isPending ? (
          <Spinner />
        ) : (
          <button
            className="font-myFontBold text-[32px]"
            disabled={isPending}
            onClick={logout}
          >
            Logout
          </button>
        )}
      </div>
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
