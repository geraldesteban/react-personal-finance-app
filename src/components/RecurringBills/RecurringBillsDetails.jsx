import BillPaid from "../../assets/icon-bill-paid.svg?react";
import BillDue from "../../assets/icon-bill-due.svg?react";
import { RecurringBills } from "./RecurringBills";
import Spinner from "../Spinner";

export default function RecurringBillsDetails() {
  const { recurringBillsDetails } = RecurringBills();

  return (
    <div className="mx-5">
      <div className="flex justify-between items-center font-myFontRegular text-grey-500 text-[12px] border-b py-5">
        <span className="flex">Bill Title</span>
        <span className="flex sm:hidden">Due Date</span>
        <span className="flex">Amount</span>
      </div>
      {recurringBillsDetails.map((recurring, id) => {
        return (
          <div
            className="flex justify-between items-center border-b py-5"
            key={id}
          >
            <div className="flex items-center sm:flex-col">
              <div className="flex items-center gap-5">
                <img
                  src={`${recurring.billImage}`}
                  alt={`${recurring.billTitle}`}
                  className="rounded-full w-[40px] h-[40px]"
                />
                <span className="font-myFontBold text-grey-900 text-[14px]">
                  {recurring.billTitle}
                </span>
              </div>
              {/* Due Date output. Only display in Mobile*/}
              <div className="hidden items-center w-[210px]  sm:flex">
                <p
                  className={`font-myFontRegular text-[12px] ${
                    +recurring.date.replace(/(st|nd|rd|th)$/i, "") >= 19 &&
                    +recurring.date.replace(/(st|nd|rd|th)$/i, "") <= 24
                      ? "text-red"
                      : "text-green"
                  } mr-2`}
                >
                  Monthly-{recurring.date}
                </p>
                {+recurring.date.replace(/(st|nd|rd|th)$/i, "") >= 19 &&
                +recurring.date.replace(/(st|nd|rd|th)$/i, "") <= 24 ? (
                  <BillDue className="text-red" />
                ) : (
                  <BillPaid className="text-green" />
                )}
              </div>
            </div>
            {/* Due Date output. Only display in Desktop */}
            <div className="flex items-center w-[210px] sm:hidden">
              <p
                className={`font-myFontRegular text-[12px] ${
                  +recurring.date.replace(/(st|nd|rd|th)$/i, "") >= 19 &&
                  +recurring.date.replace(/(st|nd|rd|th)$/i, "") <= 24
                    ? "text-red"
                    : "text-green"
                } mr-2`}
              >
                Monthly-{recurring.date}
              </p>
              {+recurring.date.replace(/(st|nd|rd|th)$/i, "") >= 19 &&
              +recurring.date.replace(/(st|nd|rd|th)$/i, "") <= 24 ? (
                <BillDue className="text-red" />
              ) : (
                <BillPaid className="text-green" />
              )}
            </div>
            <div>
              <p
                className={`font-myFontBold ${
                  +recurring.date.replace(/(st|nd|rd|th)$/i, "") >= 19 &&
                  +recurring.date.replace(/(st|nd|rd|th)$/i, "") <= 24
                    ? "text-red"
                    : "text-grey-900"
                } text-[14px]`}
              >
                {recurring.amount}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
