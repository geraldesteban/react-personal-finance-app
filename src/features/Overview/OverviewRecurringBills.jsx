import ViewDetails from "../../ui/ViewDetails";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../ui/Spinner";
import { useRecurringBills } from "../RecurringBills/useRecurringBills";
import { formatCurrency } from "../../utils/formatCurrency";

export default function OverviewRecurringBills() {
  const {
    totalPaidbills,
    totalUpcomingBills,
    totalDueSoonBills,
    isTransactionsData,
    errorTransactionsData,
  } = useRecurringBills();

  if (isTransactionsData)
    return (
      <div className="bg-white p-10 rounded-xl lg:p-5">
        <ViewDetails
          heading="Recurring Bills"
          span="See Details"
          seeDetails="recurringbills"
        />
        <Spinner />
      </div>
    );

  if (errorTransactionsData)
    return (
      <div className="bg-white p-10 rounded-xl lg:p-5">
        <ViewDetails
          heading="Recurring Bills"
          span="See Details"
          seeDetails="recurringbills"
        />
        <ErrorMessage errorMessage={errorTransactionsData.message} />
      </div>
    );

  return (
    <div className="bg-white p-10 rounded-xl lg:p-5 flex-1">
      <ViewDetails
        heading="Recurring Bills"
        span="See Details"
        seeDetails="recurringbills"
      />
      <div className="mt-10">
        <div className="flex relative justify-between items-center bg-beige-100 rounded-xl py-5 mb-5">
          <div className="absolute bg-green h-full w-1 rounded-tl-xl rounded-bl-xl"></div>
          <h2 className="font-myFontRegular text-grey-500 text-[14px] ml-4">
            Paid Bills
          </h2>
          <p className="font-myFontBold text-grey-900 text-[14px] mr-5">
            {formatCurrency(totalPaidbills)}
          </p>
        </div>
        <div className="flex relative justify-between items-center bg-beige-100 rounded-xl py-5 mb-5">
          <div className="absolute bg-yellow h-full w-1 rounded-tl-xl rounded-bl-xl"></div>
          <h2 className="font-myFontRegular text-grey-500 text-[14px] ml-4">
            Total Upcoming
          </h2>
          <p className="font-myFontBold text-grey-900 text-[14px] mr-5">
            {formatCurrency(totalUpcomingBills)}
          </p>
        </div>
        <div className="flex relative justify-between items-center bg-beige-100 rounded-xl py-5">
          <div className="absolute bg-cyan h-full w-1 rounded-tl-xl rounded-bl-xl"></div>
          <h2 className="font-myFontRegular text-grey-500 text-[14px] ml-4">
            Due Soon
          </h2>
          <p className="font-myFontBold text-grey-900 text-[14px] mr-5">
            {formatCurrency(totalDueSoonBills)}
          </p>
        </div>
      </div>
    </div>
  );
}
