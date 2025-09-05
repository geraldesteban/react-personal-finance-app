import PieChartBudget from "../../ui/PieChartBudget";
import { formatCurrency } from "../../utils/formatCurrency";
import { useReadBudgets } from "./useReadBudgets";

export default function BudgetsSpendingSummary() {
  const { dataBudgets } = useReadBudgets();

  return (
    <div className="flex-1 bg-white rounded-xl p-15 lg:justify-between sm:block">
      {/* Pie Chart for Budget */}
      <PieChartBudget />
      <div className="p-10 sm:p-5">
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
                className="absolute w-1 h-full rounded-xl"
                style={{ backgroundColor: db.budgetThemeColor }}
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
