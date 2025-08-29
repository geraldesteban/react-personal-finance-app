import BillPaid from "../../assets/icon-bill-paid.svg?react";
import BillDue from "../../assets/icon-bill-due.svg?react";
import { formatCurrency } from "../../utils/formatCurrency";
import { getDayOnly } from "../../utils/formatDate";
import { RecurringBills } from "./RecurringBills";

export default function RecurringBillsDetails() {
  const { data } = RecurringBills();

  const recurringBills = data.transactions.filter(
    (transac) => transac.recurring === true
  );

  return (
    <div className="mx-5">
      <div className="flex justify-between items-center font-myFontRegular text-grey-500 text-[12px] border-b py-5">
        <span className="flex">Bill Title</span>
        <span className="flex sm:hidden">Due Date</span>
        <span className="flex">Amount</span>
      </div>
      {recurringBills.map((recurring, id) => {
        return (
          <div
            className="flex justify-between items-center border-b py-5"
            key={id}
          >
            <div className="flex items-center sm:flex-col">
              <div className="flex items-center gap-5">
                <img
                  src={`${recurring.avatar}`}
                  alt={`${recurring.name}`}
                  className="rounded-full w-[40px] h-[40px]"
                />
                <span className="font-myFontBold text-grey-900 text-[14px]">
                  {recurring.name}
                </span>
              </div>
              <div className="hidden items-center w-[210px]  sm:flex">
                <p
                  className={`font-myFontRegular text-[12px] ${
                    new Date(recurring.date).getDate() >= 19 &&
                    new Date(recurring.date).getDate() <= 24
                      ? "text-red"
                      : "text-green"
                  } mr-2`}
                >
                  Monthly-{getDayOnly(recurring.date)}
                </p>
                {new Date(recurring.date).getDate() >= 19 &&
                new Date(recurring.date).getDate() <= 24 ? (
                  <BillDue className="text-red" />
                ) : (
                  <BillPaid className="text-green" />
                )}
              </div>
            </div>
            <div className="flex items-center w-[210px] sm:hidden">
              <p
                className={`font-myFontRegular text-[12px] ${
                  new Date(recurring.date).getDate() >= 19 &&
                  new Date(recurring.date).getDate() <= 24
                    ? "text-red"
                    : "text-green"
                } mr-2`}
              >
                Monthly-{getDayOnly(recurring.date)}
              </p>
              {new Date(recurring.date).getDate() >= 19 &&
              new Date(recurring.date).getDate() <= 24 ? (
                <BillDue className="text-red" />
              ) : (
                <BillPaid className="text-green" />
              )}
            </div>
            <div>
              <p
                className={`font-myFontBold ${
                  new Date(recurring.date).getDate() >= 19 &&
                  new Date(recurring.date).getDate() <= 24
                    ? "text-red"
                    : "text-grey-900"
                } text-[14px]`}
              >
                {formatCurrency(recurring.amount).replace("-", "")}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
