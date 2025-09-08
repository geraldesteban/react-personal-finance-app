import { formatCurrency } from "../../utils/formatCurrency";
import { useBalance } from "./useBalance";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../ui/Spinner";

export default function OverviewBalanceIncomeExpenses() {
  const { balances, isBalances, errorBalances } = useBalance();

  if (isBalances)
    return (
      <div className="flex flex-wrap gap-5 mb-5 ssm:flex-col mt-10">
        <div className={`flex-1 p-7 rounded-xl text-white bg-grey-900 lg:p-5`}>
          <h2 className={`font-myFontRegular text-[14px] text-white mb-2.5`}>
            Current Balance
          </h2>
          <Spinner />
        </div>
        <div className={`flex-1 p-7 rounded-xl bg-white lg:p-5`}>
          <h2 className={`font-myFontRegular text-[14px] text-grey-500 mb-2.5`}>
            Income
          </h2>
          <Spinner />
        </div>
        <div className={`flex-1 p-7 rounded-xl bg-white lg:p-5`}>
          <h2 className={`font-myFontRegular text-[14px] text-grey-500 mb-2.5`}>
            Expenses
          </h2>
          <Spinner />
        </div>
      </div>
    );

  if (errorBalances)
    return (
      <div className="flex flex-wrap gap-5 mb-5 sm:flex-col mt-10">
        <div className={`flex-1 p-7 rounded-xl text-white bg-grey-900 lg:p-5`}>
          <h2 className={`font-myFontRegular text-[14px] text-white mb-2.5`}>
            Current Balance
          </h2>
          <ErrorMessage error={errorBalances.message} />
        </div>
        <div className={`flex-1 p-7 rounded-xl bg-white lg:p-5`}>
          <h2 className={`font-myFontRegular text-[14px] text-grey-500 mb-2.5`}>
            Income
          </h2>
          <ErrorMessage />
        </div>
        <div className={`flex-1 p-7 rounded-xl bg-white lg:p-5`}>
          <h2 className={`font-myFontRegular text-[14px] text-grey-500 mb-2.5`}>
            Expenses
          </h2>
          <ErrorMessage error={errorBalances.message} />
        </div>
      </div>
    );

  return (
    <div className="flex flex-wrap gap-5 mb-5 sm:flex-col mt-10">
      <div className={`flex-1 p-7 rounded-xl text-white bg-grey-900 lg:p-5`}>
        <h2 className={`font-myFontRegular text-[14px] text-white mb-2.5`}>
          Current Balance
        </h2>
        <p className={`font-myFontBold text-[32px] text-white`}>
          {formatCurrency(balances?.balance)}
        </p>
      </div>
      <div className={`flex-1 p-7 rounded-xl bg-white lg:p-5`}>
        <h2 className={`font-myFontRegular text-[14px] text-grey-500 mb-2.5`}>
          Income
        </h2>
        <p className={`font-myFontBold text-[32px] text-grey-900`}>
          {formatCurrency(balances?.income)}
        </p>
      </div>
      <div className={`flex-1 p-7 rounded-xl bg-white lg:p-5`}>
        <h2 className={`font-myFontRegular text-[14px] text-grey-500 mb-2.5`}>
          Expenses
        </h2>
        <p className={`font-myFontBold text-[32px] text-grey-900`}>
          {formatCurrency(balances?.expenses)}
        </p>
      </div>
    </div>
  );
}
