import CaretRight from "../../assets/icon-caret-right.svg?react";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../ui/Spinner";
import { useTransactions } from "../Transactions/useTransactions";
import { useReadBudgets } from "./useReadBudgets";

export default function BudgetsLatestSpendings() {
  const { dataBudgets } = useReadBudgets();
  const { transactionsData, isTransactionsData, errorTransactionsData } =
    useTransactions();

  if (isTransactionsData) return <Spinner />;

  if (errorTransactionsData)
    return <ErrorMessage errorMessage={errorTransactionsData.message} />;

  return (
    <div className="p-5 bg-beige-100 rounded-xl">
      <div className="flex items-center justify-between">
        <h2 className="font-myFontBold">Latest Spending</h2>
        <button className="flex items-center font-myFontRegular text-[#696868] text-[14px] gap-5">
          <span>See All</span>
          <CaretRight />
        </button>
      </div>
      {transactionsData
        ?.filter((td) =>
          dataBudgets?.some(
            (db) => td.category.toLowerCase() === db.budgetName.toLowerCase()
          )
        )
        .slice(0, 3)
        .map((ls) => (
          <div
            className="flex justify-between items-center border-b border-grey-50text-grey-500 py-3"
            key={ls.id}
          >
            <div className="flex items-center">
              <img
                src={ls.avatar}
                alt={ls.name}
                className="w-[40px] h-[40px] rounded-full mr-5 sm:hidden"
              />
              <h2 className="font-myFontBold text-grey-900 text-[12px]">
                {ls.name}
              </h2>
            </div>
            <div>
              <p className="text-right font-myFontBold text-grey-900 text-[12px]">
                {ls.amount}
              </p>
              <p className="font-myFontRegular text-grey-500 text-[12px]">
                {ls.date}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
