import Heading from "../../ui/Heading";
import RecurringBillsSummary from "./RecurringBillsSummary";
import RecurringBillsTotal from "./RecurringBillsTotal";
import Search from "../../ui/Search";
import SortBy from "../../ui/SortBy";
import RecurringBillsDetails from "./RecurringBillsDetails";

export default function RecurringBillsLayout() {
  return (
    <div className="m-10 lg:m-5">
      <Heading>Recurring Bills</Heading>
      <div className="flex justify-between gap-5 mt-10 lg:flex-col">
        <div className="flex-[1] flex flex-col gap-5 lg:flex-row sm:flex-col">
          <RecurringBillsTotal />
          <RecurringBillsSummary />
        </div>
        <div className="flex-[2] p-10 bg-white rounded-xl sm:p-5">
          <div className="flex-auto">
            <div className="flex justify-between items-center mb-10">
              <Search />
              <SortBy />
            </div>
            <RecurringBillsDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
