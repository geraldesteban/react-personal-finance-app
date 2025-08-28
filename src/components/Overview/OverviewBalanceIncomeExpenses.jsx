import { DATAURL } from "../../utils/constants";
import useFetchData from "../../hooks/useFetchData";
import { formatCurrency } from "../../utils/formatCurrency";

export default function OverviewBalanceIncomeExpenses() {
  const { data } = useFetchData(DATAURL);

  return (
    <div className="flex flex-wrap gap-5 mb-5 sm:flex-col mt-10">
      <div className={`flex-1 p-7 rounded-xl text-white bg-grey-900 lg:p-5`}>
        <h2 className={`font-myFontRegular text-[14px] text-white mb-2.5`}>
          Current Balance
        </h2>
        <p className={`font-myFontBold text-[32px] text-white`}>
          {formatCurrency(data.balance.current, "USD")}
        </p>
      </div>
      <div className={`flex-1 p-7 rounded-xl bg-white lg:p-5`}>
        <h2 className={`font-myFontRegular text-[14px] text-grey-500 mb-2.5`}>
          Income
        </h2>
        <p className={`font-myFontBold text-[32px] text-grey-900`}>
          {formatCurrency(data.balance.income, "USD")}
        </p>
      </div>
      <div className={`flex-1 p-7 rounded-xl bg-white lg:p-5`}>
        <h2 className={`font-myFontRegular text-[14px] text-grey-500 mb-2.5`}>
          Expenses
        </h2>
        <p className={`font-myFontBold text-[32px] text-grey-900`}>
          {formatCurrency(data.balance.expenses, "USD")}
        </p>
      </div>
    </div>
  );
}
