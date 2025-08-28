import OverviewTransactionsProfileDetails from "./OverviewTransactionsProfileDetails";
import CheckDetails from "../CheckDetails";
import { DATAURL } from "../../utils/constants";
import useFetchData from "../../hooks/useFetchData";

function OverviewTransactions() {
  const { data } = useFetchData(DATAURL);

  const transactions = data.transactions;

  return (
    <div className="bg-white p-10 rounded-xl lg:p-5 lg:w-full">
      <CheckDetails
        heading="Transactions"
        span="View All"
        seeDetails="transactions"
      />
      {transactions.slice(0, 5).map((transaction, id) => (
        <OverviewTransactionsProfileDetails
          profileImage={transaction.avatar}
          profileName={transaction.name}
          transactionMoney={transaction.amount}
          transactionDate={transaction.date}
          key={id}
        />
      ))}
    </div>
  );
}

export default OverviewTransactions;
