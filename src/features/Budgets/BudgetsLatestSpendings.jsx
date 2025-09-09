import { formatDate } from "../../utils/formatDate";
import CaretRight from "../../assets/icon-caret-right.svg?react";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../ui/Spinner";
import { useTransactions } from "../Transactions/useTransactions";
import { formatCurrency } from "../../utils/formatCurrency";
import { NavLink } from "react-router-dom";

export default function BudgetsLatestSpendings({ activeBudgetName }) {
  const { transactionsData, isTransactionsData, errorTransactionsData } =
    useTransactions("", "latest", "alltransactions", "1", true);

  if (isTransactionsData) return <Spinner />;

  if (errorTransactionsData)
    return <ErrorMessage errorMessage={errorTransactionsData.message} />;

  return (
    <div className="p-5 bg-beige-100 rounded-xl">
      <div className="flex items-center justify-between">
        <h2 className="font-myFontBold">Latest Spending</h2>
        <NavLink
          className="flex items-center font-myFontRegular text-grey-500 text-[14px] gap-5 group transition-all delay-1000"
          to={`/transactions?categoryBy=${activeBudgetName
            .replaceAll(" ", "_")
            .toLowerCase()}`}
        >
          <span className="group-hover:text-grey-900 transition-colors duration-500">
            See All
          </span>
          <CaretRight className="text-grey-500 group-hover:text-grey-900 transition-colors duration-500" />
        </NavLink>
      </div>
      {transactionsData
        ?.filter(
          (tsx) => tsx.category.toLowerCase() === activeBudgetName.toLowerCase()
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
                {formatCurrency(ls.amount)}
              </p>
              <p className="font-myFontRegular text-grey-500 text-[12px]">
                {formatDate(ls.date)}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
