import { formatCurrency } from "../../utils/formatCurrency";
import { useBalance } from "./useBalance";
import Spinner from "../Spinner";
import Error from "../Error";

export default function OverviewBalanceIncomeExpenses() {
  const { balances, isLoading, error } = useBalance();

  if (isLoading)
    return (
      <div className="flex flex-wrap gap-5 mb-5 sm:flex-col mt-10">
        <div className={`flex-1 p-7 rounded-xl text-white bg-grey-900 lg:p-5`}>
          <Spinner />
        </div>
        <div className={`flex-1 p-7 rounded-xl bg-white lg:p-5`}>
          <Spinner />
        </div>
        <div className={`flex-1 p-7 rounded-xl bg-white lg:p-5`}>
          <Spinner />
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex flex-wrap gap-5 mb-5 sm:flex-col mt-10">
        <div className={`flex-1 p-7 rounded-xl text-white bg-grey-900 lg:p-5`}>
          <Error error={error.message} />
        </div>
        <div className={`flex-1 p-7 rounded-xl bg-white lg:p-5`}>
          <Error />
        </div>
        <div className={`flex-1 p-7 rounded-xl bg-white lg:p-5`}>
          <Error error={error.message} />
        </div>
      </div>
    );

  const [balanceData] = balances;
  const { balance, income, expenses } = balanceData;

  return (
    <div className="flex flex-wrap gap-5 mb-5 sm:flex-col mt-10">
      <div className={`flex-1 p-7 rounded-xl text-white bg-grey-900 lg:p-5`}>
        <h2 className={`font-myFontRegular text-[14px] text-white mb-2.5`}>
          Current Balance
        </h2>
        <p className={`font-myFontBold text-[32px] text-white`}>
          {formatCurrency(balance, "USD")}
        </p>
      </div>
      <div className={`flex-1 p-7 rounded-xl bg-white lg:p-5`}>
        <h2 className={`font-myFontRegular text-[14px] text-grey-500 mb-2.5`}>
          Income
        </h2>
        <p className={`font-myFontBold text-[32px] text-grey-900`}>
          {formatCurrency(income, "USD")}
        </p>
      </div>
      <div className={`flex-1 p-7 rounded-xl bg-white lg:p-5`}>
        <h2 className={`font-myFontRegular text-[14px] text-grey-500 mb-2.5`}>
          Expenses
        </h2>
        <p className={`font-myFontBold text-[32px] text-grey-900`}>
          {formatCurrency(expenses, "USD")}
        </p>
      </div>
    </div>
  );
}
