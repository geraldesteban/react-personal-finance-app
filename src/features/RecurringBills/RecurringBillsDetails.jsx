import BillPaid from "../../assets/icon-bill-paid.svg?react";
import BillDue from "../../assets/icon-bill-due.svg?react";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../ui/Spinner";
import { useTransactions } from "../Transactions/useTransactions";
import { formatCurrency } from "../../utils/formatCurrency";
import { format } from "date-fns";
import { useSearchParams } from "react-router-dom";

export default function RecurringBillsDetails() {
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "latest";
  const search = searchParams.get("search") || "";

  const { transactionsData, isTransactionsData, errorTransactionsData } =
    useTransactions(search, sortBy, "alltransactions", "1", true);

  if (isTransactionsData) return <Spinner />;

  if (errorTransactionsData)
    return <ErrorMessage errorMessage={errorTransactionsData.message} />;

  return (
    <div className="mx-5">
      <div className="grid grid-cols-3 font-myFontRegular text-grey-500 text-[12px] border-b py-5 sm:grid-cols-2">
        <span className="text-left">Bill Title</span>
        <span className="text-center sm:hidden">Due Date</span>
        <span className="text-right">Amount</span>
      </div>
      {transactionsData
        ?.filter((tsx) => tsx.recurring === true)
        .filter(
          (tsx, index, self) =>
            index === self.findIndex((t) => t.name === tsx.name)
        )
        .map((tsx) => (
          <div
            className="grid grid-cols-3 border-b py-5 sm:grid-cols-2"
            key={tsx.id}
          >
            <div className="grid grid-cols-1 text-left">
              <div className="flex items-center gap-5 sm:mb-5 sm:gap-2">
                <img
                  src={tsx.avatar}
                  alt=""
                  className="rounded-full w-[40px] h-[40px]"
                />
                <span className="font-myFontBold text-grey-900 text-[14px]">
                  {tsx.name}
                </span>
              </div>
              {/* Mobile */}
              <div className="hidden items-center w-[210px]  sm:flex">
                <p
                  className={`font-myFontRegular text-[12px] mr-2 ${
                    format(tsx.date, "M") === "8"
                      ? "text-green"
                      : "text-grey-500"
                  }`}
                >
                  Monthly-{format(new Date(tsx.date), "do")}
                </p>
                {format(tsx.date, "M") === "8" ? (
                  <BillPaid className="text-green" />
                ) : (
                  <BillDue className="text-red" />
                )}
              </div>
            </div>
            {/* Desktop */}
            <div className="flex flex-row mx-auto sm:hidden ">
              <p
                className={`font-myFontRegular text-[12px] mr-2 ${
                  format(tsx.date, "M") === "8" ? "text-green" : "text-grey-500"
                }`}
              >
                Monthly-{format(new Date(tsx.date), "do")}
              </p>
              {format(tsx.date, "M") === "8" ? (
                <BillPaid className="text-green" />
              ) : Number(format(new Date(tsx.date), "d")) >= 19 &&
                Number(format(new Date(tsx.date), "d")) <= 23 ? (
                <BillDue className="text-red" />
              ) : (
                ""
              )}
            </div>
            <div className="text-right">
              <p
                className={`font-myFontBold text-[14px] ${
                  Number(format(new Date(tsx.date), "d")) >= 19 &&
                  Number(format(new Date(tsx.date), "d")) <= 23
                    ? "text-red"
                    : "text-grey-900"
                }`}
              >
                {formatCurrency(Math.abs(tsx.amount))}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
