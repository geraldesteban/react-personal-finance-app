import Heading from "../Heading";
import RecurringBillsDetails from "./RecurringBillsDetails";
import RecurringBillsSearch from "./RecurringBillsSearch";
import RecurringBillsSortby from "./RecurringBillsSortby";
import RecurringBillsSummary from "./RecurringBillsSummary";
import RecurringBillsTotal from "./RecurringBillsTotal";

export default function RecurringBillsLayout() {
  return (
    <>
      <Heading>Recurring Bills</Heading>
      <div className="flex justify-between gap-5 mt-10 lg:flex-col">
        <div className="flex-[1] flex flex-col gap-5 lg:flex-col">
          <RecurringBillsTotal />
          <RecurringBillsSummary />
        </div>
        <div className="flex-[2] p-10 bg-white rounded-xl">
          <div className="flex-auto">
            <div className="flex justify-between items-center mb-10">
              <RecurringBillsSearch />
              <RecurringBillsSortby />
            </div>
            <RecurringBillsDetails />
          </div>
        </div>
      </div>
    </>
  );
}
