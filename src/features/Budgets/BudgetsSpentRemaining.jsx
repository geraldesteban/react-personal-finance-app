import { formatCurrency } from "../../utils/formatCurrency";
import { useReadBudgets } from "../Budgets/useReadBudgets";

export default function BudgetsSpentRemaining({ activeBudgetName }) {
  const { dataBudgets } = useReadBudgets();

  return (
    <>
      {dataBudgets
        ?.filter(
          (db) => db.budgetName.toLowerCase() === activeBudgetName.toLowerCase()
        )
        .map((db) => (
          <div key={db.id}>
            <div>
              <h2 className="font-myFontRegular text-grey-500 text-[14px] mb-5">
                Maximum of {formatCurrency(db.maximumSpend)}
              </h2>
              <div className="w-full h-8 rounded-md bg-beige-100 flex items-center">
                <div
                  className="h-7 rounded-md ml-1"
                  style={{
                    width: `${(db.budgetSpent / db.maximumSpend) * 100}%`,
                    backgroundColor: db.budgetThemeColor,
                  }}
                ></div>
              </div>
            </div>
            <div className="flex justify-between items-center my-5">
              <div className="flex flex-1 relative">
                <div className="absolute w-1 h-full bg-green rounded-xl"></div>
                <div className="ml-5">
                  <p className="font-myFontRegular text-grey-500 text-[12px]">
                    Spent
                  </p>
                  <p className="font-myFontBold text-grey-900 text-[14px]">
                    {formatCurrency(db.budgetSpent)}
                  </p>
                </div>
              </div>
              <div className="flex flex-1 relative">
                <div className="absolute w-1 h-full bg-beige-100 rounded-xl"></div>
                <div className="ml-5">
                  <p className="font-myFontRegular text-grey-500 text-[12px]">
                    Remaining
                  </p>
                  <p className="font-myFontBold text-grey-900 text-[14px]">
                    {formatCurrency(db.budgetRemaining)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
