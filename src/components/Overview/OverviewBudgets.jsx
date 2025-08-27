import CheckDetails from "../CheckDetails";

export default function OverviewBudgets() {
  return (
    <div className="flex-1 bg-white p-10 rounded-xl lg:p-5">
      <CheckDetails heading="Budgets" span="See Details" seeDetails="budgets" />
      <div className="flex items-center justify-between">
        <div className="text-center">
          <h2 className="font-myFontBold text-[32px] text-grey-900">$338</h2>
          <p className="font-myFontRegular text-[12px] text-grey-500">
            of $975 limit
          </p>
        </div>
        <div>
          <div className="relative mb-5">
            <div className="absolute w-1 h-full bg-green rounded-xl"></div>
            <div className="ml-5">
              <h2 className="font-myFontRegular text-grey-500 text-[12px] mb-1">
                Entertainment
              </h2>
              <p className="font-myFontBold text-grey-900 text-[14px]">
                $50.00
              </p>
            </div>
          </div>
          <div className="relative mb-5">
            <div className="absolute w-1 h-full bg-cyan rounded-xl"></div>
            <div className="ml-5">
              <h2 className="font-myFontRegular text-grey-500 text-[12px] mb-1">
                Bills
              </h2>
              <p className="font-myFontBold text-grey-900 text-[14px]">
                $750.00
              </p>
            </div>
          </div>
          <div className="relative mb-5">
            <div className="absolute w-1 h-full bg-yellow rounded-xl"></div>
            <div className="ml-5">
              <h2 className="font-myFontRegular text-grey-500 text-[12px] mb-1">
                Dining Out
              </h2>
              <p className="font-myFontBold text-grey-900 text-[14px]">
                $75.00
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute w-1 h-full bg-navy rounded-xl"></div>
            <div className="ml-5">
              <h2 className="font-myFontRegular text-grey-500 text-[12px] mb-1">
                Personal Care
              </h2>
              <p className="font-myFontBold text-grey-900 text-[14px]">
                $100.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
