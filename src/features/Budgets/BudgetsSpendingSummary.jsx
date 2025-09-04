import { formatCurrency } from "../../utils/formatCurrency";
import { useReadBudgets } from "./useReadBudgets";

export default function BudgetsSpendingSummary() {
  const { dataBudgets } = useReadBudgets();

  const totalSpent = dataBudgets
    ?.map((db) => db.budgetSpent)
    .reduce((acc, curr) => acc + curr, 0);

  const totalMaximumSpend = dataBudgets
    ?.filter((db) => db.maximumSpend)
    .map((db) => db.maximumSpend)
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="flex-1 bg-white rounded-xl p-10 lg:flex lg:items-center lg:justify-between sm:block">
      <div className="text-center">
        CHART
        <p>{formatCurrency(totalSpent)}</p>
        <p>of {formatCurrency(totalMaximumSpend)} limit</p>
      </div>
      <div>
        <h2 className="font-myFontBold text-grey-900 text-[20px] mb-5">
          Spending Summary
        </h2>
        {dataBudgets?.map((db) => (
          <div
            className="flex justify-between items-center py-2 border-b border-grey-100"
            key={db.id}
          >
            <div className="flex items-center relative">
              <div
                className={`absolute w-1 h-full ${db.budgetThemeColor} rounded-xl`}
              ></div>
              <p className="font-myFontRegular text-[#696868] text-[14px] ml-5">
                {db.budgetName}
              </p>
            </div>
            <div className="flex items-center">
              <p className="font-myFontBold text-grey-900 text-[16px] mr-2">
                {formatCurrency(db.budgetSpent)}
              </p>
              <p className="font-myFontRegular text-grey-500 text-[12px]">
                of {formatCurrency(db.maximumSpend)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
