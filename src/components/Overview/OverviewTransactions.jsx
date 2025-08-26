import OverviewTransactionsProfileDetails from "./OverviewTransactionsProfileDetails";
import CheckDetails from "../CheckDetails";
import data from "../../data/data.json";

function OverviewTransactions() {
  const transactions = data.transactions;

  return (
    <div className="flex-1 bg-white p-10 rounded-xl lg:p-5">
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
