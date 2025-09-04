import RecurringBillsIcon from "../../assets/icon-recurring-bills.svg?react";
import { formatCurrency } from "../../utils/formatCurrency";
import { useRecurringBills } from "./useRecurringBills";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../ui/Spinner";

export default function RecurringBillsTotal() {
  const { totalBills, isTransactionsData, errorTransactionsData } =
    useRecurringBills();

  if (isTransactionsData)
    return (
      <div className="bg-grey-900 p-10 rounded-xl lg:p-5 lg:flex-1">
        <Spinner />;
      </div>
    );

  if (errorTransactionsData)
    return <ErrorMessage errorMessage={errorTransactionsData.message} />;

  return (
    <div className="bg-grey-900 p-10 rounded-xl lg:p-5 lg:flex-1">
      <RecurringBillsIcon className="mb-10" />
      <h2 className="font-myFontRegular text-white text-[14px]">Total Bills</h2>
      <p className="font-myFontBold text-white text-[32px]">
        {formatCurrency(totalBills)}
      </p>
    </div>
  );
}
