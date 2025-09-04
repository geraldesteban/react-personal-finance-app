import ViewDetails from "../../ui/ViewDetails";
import { formatCurrency } from "../../utils/formatCurrency";
import { useReadBudgets } from "../Budgets/useReadBudgets";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../ui/ErrorMessage";

export default function OverviewBudgets() {
  const { dataBudgets, isDataBudgets, errorDataBudgets } = useReadBudgets();

  if (isDataBudgets)
    return (
      <div className="bg-white p-10 rounded-xl lg:p-5">
        <Spinner />
      </div>
    );

  if (errorDataBudgets)
    return (
      <div className="bg-white p-10 rounded-xl lg:p-5">
        <ErrorMessage errorMessage={errorDataBudgets.message} />
      </div>
    );

  return (
    <div className="bg-white p-10 rounded-xl lg:p-5">
      <ViewDetails heading="Budgets" span="See Details" seeDetails="budgets" />
      <div className="flex items-center justify-between sm:flex-col sm:items-start">
        <div className="flex flex-col justify-center text-center mb-5">
          <h2 className="font-myFontBold text-[32px] text-grey-900">$338</h2>
          <p className="font-myFontRegular text-[12px] text-grey-500">
            of $975 limit
          </p>
        </div>
        <div className="grid grid-cols-1">
          {dataBudgets?.slice(0, 4).map((budgets) => (
            <div className="relative mb-5 sm:mr-16" key={budgets.id}>
              <div
                className={`absolute w-1 h-full ${budgets.budgetThemeColor} rounded-xl`}
              ></div>
              <div className="ml-5">
                <h2 className="font-myFontRegular text-grey-500 text-[12px] mb-1">
                  {budgets.budgetName}
                </h2>
                <p className="font-myFontBold text-grey-900 text-[14px]">
                  {formatCurrency(budgets.maximumSpend)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
