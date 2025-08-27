import BillPaid from "../../assets/icon-bill-paid.svg?react";
import BillDue from "../../assets/icon-bill-due.svg?react";

export default function RecurringBillsDetails() {
  const test = true;
  return (
    <div className="mx-5">
      <div className="flex justify-between items-center font-myFontRegular text-grey-500 text-[12px] border-b py-5">
        <span className="flex">Bill Title</span>
        <span className="flex sm:hidden">Due Date</span>
        <span className="flex">Amount</span>
      </div>

      <div className="flex justify-between items-center border-b py-5">
        <div className="flex items-center sm:flex-col">
          <div className="flex items-center gap-5">
            <img
              src="{transaction.avatar}"
              alt="{transaction.name}"
              className="rounded-full w-[40px] h-[40px]"
            />
            <span className="font-myFontBold text-grey-900 text-[14px] whitespace-nowrap">
              Spark Electric Solutions
            </span>
          </div>
          <div className="hidden items-center w-[210px]  sm:flex">
            <p className="font-myFontRegular text-[12px] text-green mr-2">
              Monthly-2nd
            </p>
            {test ? (
              <BillPaid className="text-green" />
            ) : (
              <BillDue className="text-green" />
            )}
          </div>
        </div>
        <div className="flex items-center w-[210px] sm:hidden">
          <p className="font-myFontRegular text-[12px] text-green mr-2">
            Monthly-2nd
          </p>
          {test ? (
            <BillPaid className="text-green" />
          ) : (
            <BillDue className="text-green" />
          )}
        </div>
        <div>
          <p className="font-myFontBold text-grey-900 text-[14px]">$100.00</p>
        </div>
      </div>
    </div>
  );
}
