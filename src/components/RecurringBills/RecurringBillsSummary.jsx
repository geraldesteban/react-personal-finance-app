import { formatCurrency } from "../../utils/formatCurrency";
import { RecurringBills } from "./RecurringBills";

export default function RecurringBillsSummary() {
  const {
    paidBills,
    paidBillsLength,
    totalUpcoming,
    totalUpcomingLength,
    dueSoon,
    dueSoonLength,
  } = RecurringBills();

  return (
    <div className="bg-white p-5 rounded-xl lg:flex-1">
      <h2 className="font-myFontBoldtext-grey-900 text-[16px]">Summary</h2>
      <div className="flex justify-between items-center border-b border-grey-50text-grey-500 py-2">
        <p className="font-myFontRegular text-grey-500 text-[12px]">
          Paid Bills
        </p>
        <div className="flex items-center">
          <p className="font-myFontBold text-grey-900 text-[12px] mr-1">
            {paidBillsLength}
          </p>
          <p className="font-myFontBold text-grey-900 text-[12px]">
            ({formatCurrency(paidBills)})
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center border-b border-grey-50text-grey-500 py-2">
        <p className="font-myFontRegular text-grey-500 text-[12px]">
          Total Upcoming
        </p>
        <div className="flex items-center">
          <p className="font-myFontBold text-grey-900 text-[12px] mr-1">
            {totalUpcomingLength}
          </p>
          <p className="font-myFontBold text-grey-900 text-[12px]">
            ({formatCurrency(totalUpcoming)})
          </p>
        </div>
      </div>
      <div className="text-red flex justify-between items-center py-2">
        <p className="font-myFontRegular text-[12px]">Due Soon</p>
        <div className="flex items-center">
          <p className="font-myFontBoldtext-[12px]">{dueSoonLength}</p>
          <p className="font-myFontBoldtext-[12px]">
            ({formatCurrency(dueSoon)})
          </p>
        </div>
      </div>
    </div>
  );
}
