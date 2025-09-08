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
      <div className="flex justify-between items-center font-myFontRegular text-grey-500 text-[12px] border-b py-5">
        <span className="flex">Bill Title</span>
        <span className="flex sm:hidden">Due Date</span>
        <span className="flex">Amount</span>
      </div>
      {transactionsData
        ?.filter((tsx) => tsx.recurring === true)
        .filter(
          (tsx, index, self) =>
            index === self.findIndex((t) => t.name === tsx.name)
        )
        .map((tsx) => (
          <div
            className="flex justify-between items-center border-b py-5"
            key={tsx.id}
          >
            <div className="flex items-center sm:flex-col">
              <div className="flex items-center gap-5">
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
            <div className="flex items-center w-[210px] sm:hidden">
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
            <div>
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
