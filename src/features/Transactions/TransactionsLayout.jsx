import Heading from "../../ui/Heading";
import SortBy from "../../ui/SortBy";
import Search from "../../ui/Search";
import TransactionsCategory from "./TransactionsCategory";
import TransactionsDetails from "./TransactionsDetails";

export default function TransactionsLayout() {
  return (
    <>
      <div className="ml-10 mt-10 sm:ml-5 sm:mt-5">
        <Heading>Transactions</Heading>
      </div>
      <div className="bg-white rounded-xl p-10 m-10 sm:m-5 lg:p-5">
        <div className="flex items-center justify-between">
          <Search />
          <div className="flex items-center">
            <SortBy />
            <TransactionsCategory />
          </div>
        </div>
        <TransactionsDetails />
      </div>
    </>
  );
}
