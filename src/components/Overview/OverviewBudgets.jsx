import CheckDetails from "../CheckDetails";

export default function OverviewBudgets() {
  return (
    <div className="flex-1 bg-white p-10 rounded-xl lg:p-5">
      <CheckDetails heading="Budgets" span="See Details" seeDetails="budgets" />
      <div className="flex items-center justify-between">
        <div>
          <h2>$338</h2>
          <p>of $975 limit</p>
        </div>
        <div>
          <div className="relative">
            <div className="absolute w-1 h-full bg-green"></div>
            <div className="ml-5">
              <h2 className="text-grey-500 text-[12px] font-semibold">
                Entertainment
              </h2>
              <p className="text-grey-900 text-[14px] font-bold">$50.00</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute w-1 h-full bg-cyan"></div>
            <div className="ml-5">
              <h2 className="text-grey-500 text-[12px] font-semibold">Bills</h2>
              <p className="text-grey-900 text-[14px] font-bold">$750.00</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute w-1 h-full bg-yellow"></div>
            <div className="ml-5">
              <h2 className="text-grey-500 text-[12px] font-semibold">
                Dining Out
              </h2>
              <p className="text-grey-900 text-[14px] font-bold">$75.00</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute w-1 h-full bg-navy"></div>
            <div className="ml-5">
              <h2 className="text-grey-500 text-[12px] font-semibold">
                Personal Care
              </h2>
              <p className="text-grey-900 text-[14px] font-bold">$100.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
