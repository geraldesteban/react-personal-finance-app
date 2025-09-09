import { formatCurrency } from "../../utils/formatCurrency";
import { useRecurringBills } from "./useRecurringBills";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../ui/Spinner";

export default function RecurringBillsSummary() {
  const {
    numberPaidBills,
    numberUpcomingBills,
    numberDueSoonBills,
    totalPaidbills,
    totalUpcomingBills,
    totalDueSoonBills,
    isTransactionsData,
    errorTransactionsData,
  } = useRecurringBills();

  if (isTransactionsData)
    return (
      <div className="bg-white p-5 rounded-xl lg:flex-1">
        <h2 className="font-myFontBoldtext-grey-900 text-[16px]">Summary</h2>
        <Spinner />
      </div>
    );

  if (errorTransactionsData)
    return (
      <div className="bg-white p-5 rounded-xl lg:flex-1">
        <h2 className="font-myFontBoldtext-grey-900 text-[16px]">Summary</h2>
        <ErrorMessage errorMessage={errorTransactionsData.message} />
      </div>
    );

  return (
    <div className="bg-white p-5 rounded-xl lg:flex-1">
      <h2 className="font-myFontBoldtext-grey-900 text-[16px]">Summary</h2>
      <div className="flex justify-between items-center border-b border-grey-50text-grey-500 py-2">
        <p className="font-myFontRegular text-grey-500 text-[12px]">
          Paid Bills
        </p>
        <div className="flex items-center">
          <p className="font-myFontBold text-grey-900 text-[12px] mr-1">
            {numberPaidBills}
          </p>
          <p className="font-myFontBold text-grey-900 text-[12px]">
            ({formatCurrency(totalPaidbills)})
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center border-b border-grey-50text-grey-500 py-2">
        <p className="font-myFontRegular text-grey-500 text-[12px]">
          Total Upcoming
        </p>
        <div className="flex items-center">
          <p className="font-myFontBold text-grey-900 text-[12px] mr-1">
            {numberUpcomingBills}
          </p>
          <p className="font-myFontBold text-grey-900 text-[12px]">
            ({formatCurrency(totalUpcomingBills)})
          </p>
        </div>
      </div>
      <div className="text-red flex justify-between items-center py-2">
        <p className="font-myFontRegular text-[12px]">Due Soon</p>
        <div className="flex items-center">
          <p className="font-myFontBold text-[12px] mr-1">
            {numberDueSoonBills}
          </p>
          <p className="font-myFontBold text-[12px]">
            ({formatCurrency(totalDueSoonBills)})
          </p>
        </div>
      </div>
    </div>
  );
}
