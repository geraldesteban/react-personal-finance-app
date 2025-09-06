import ViewDetails from "../../ui/ViewDetails";
import { formatCurrency } from "../../utils/formatCurrency";
import { useReadBudgets } from "../Budgets/useReadBudgets";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../ui/ErrorMessage";
import PieChartBudget from "../../ui/PieChartBudget";

export default function OverviewBudgets() {
  const { dataBudgets, isDataBudgets, errorDataBudgets } = useReadBudgets();

  if (isDataBudgets)
    return (
      <div className="bg-white p-10 rounded-xl lg:p-5">
        <ViewDetails
          heading="Budgets"
          span="See Details"
          seeDetails="budgets"
        />
        <Spinner />
      </div>
    );

  if (errorDataBudgets)
    return (
      <div className="bg-white p-10 rounded-xl lg:p-5">
        <ViewDetails
          heading="Budgets"
          span="See Details"
          seeDetails="budgets"
        />
        <ErrorMessage errorMessage={errorDataBudgets.message} />
      </div>
    );

  return (
    <div className="bg-white p-10 rounded-xl lg:p-5">
      <ViewDetails heading="Budgets" span="See Details" seeDetails="budgets" />
      <div className="flex items-center justify-between sm:block">
        <PieChartBudget />
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {dataBudgets?.slice(0, 4).map((budgets) => (
            <div className="relative mb-5 sm:mr-16" key={budgets.id}>
              <div
                className="absolute w-1 h-full rounded-xl"
                style={{ backgroundColor: budgets.budgetThemeColor }}
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
