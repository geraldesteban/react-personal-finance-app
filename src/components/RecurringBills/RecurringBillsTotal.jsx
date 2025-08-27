import RecurringBills from "../../assets/icon-recurring-bills.svg?react";
export default function RecurringBillsTotal() {
  return (
    <div className="bg-grey-900 p-10 rounded-xl lg:p-5">
      <RecurringBills className="mb-10" />
      <h2 className="font-myFontRegular text-white text-[14px]">Total Bills</h2>
      <p className="font-myFontBold text-white text-[32px]">$384.98</p>
    </div>
  );
}
