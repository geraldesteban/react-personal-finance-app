import { format } from "date-fns";
import { formatCurrency } from "../../utils/formatCurrency";
import ViewDetails from "../../ui/ViewDetails";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../ui/Spinner";
import { useTransactions } from "../Transactions/useTransactions";

function OverviewTransactions() {
  const { transactionsData, isTransactionsData, errorTransactionsData } =
    useTransactions();

  if (isTransactionsData)
    return (
      <div className="bg-white p-10 rounded-xl lg:p-5 lg:w-full">
        <ViewDetails
          heading="Transactions"
          span="View All"
          seeDetails="transactions"
        />
        <Spinner />
      </div>
    );

  if (errorTransactionsData)
    return (
      <div className="bg-white p-10 rounded-xl lg:p-5 lg:w-full">
        <ViewDetails
          heading="Transactions"
          span="View All"
          seeDetails="transactions"
        />
        <ErrorMessage errorMessage={errorTransactionsData.messsage} />;
      </div>
    );

  return (
    <div className="bg-white p-10 rounded-xl lg:p-5 lg:w-full">
      <ViewDetails
        heading="Transactions"
        span="View All"
        seeDetails="transactions"
      />
      {transactionsData?.slice(0, 5).map((tsx) => (
        <div
          className="flex justify-between py-5 border-b border-grey-100 last:border-none last:pb-0"
          key={tsx.id}
        >
          <div className="flex items-center">
            <img
              className="mr-5 rounded-full w-[40px] h-[40px]"
              src={tsx.avatar}
              alt={tsx.name}
            />
            <h2 className="font-myFontBold text-grey-900 text-[14px]">
              {tsx.name}
            </h2>
          </div>
          <div>
            <h2
              className={`font-myFontBold text-${
                tsx.amount > 0 ? "green" : "grey-900"
              } text-[14px] text-right mb-1`}
            >
              {tsx.amount > 0 ? "+" : ""}
              {formatCurrency(tsx.amount)}
            </h2>
            <p className="font-myFontRegular text-grey-500 text-[12px]">
              {format(tsx.date, "dd MMM yyyy")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OverviewTransactions;
