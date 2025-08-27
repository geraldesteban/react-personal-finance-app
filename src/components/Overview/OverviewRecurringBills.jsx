import CheckDetails from "../CheckDetails";

export default function OverviewRecurringBills() {
  return (
    <div className="flex-1 bg-white p-10 rounded-xl lg:p-5">
      <CheckDetails
        heading="Recurring Bills"
        span="See Details"
        seeDetails="recurringbills"
      />
      <div>
        <div className="flex relative justify-between items-center bg-beige-100 rounded-xl py-5 mb-5">
          <div className="absolute bg-green h-full w-1 rounded-tl-xl rounded-bl-xl"></div>
          <h2 className="font-myFontRegular text-grey-500 text-[14px] ml-4">
            Paid Bills
          </h2>
          <p className="font-myFontBold text-grey-900 text-[14px] mr-5">
            $190.00
          </p>
        </div>
        <div className="flex relative justify-between items-center bg-beige-100 rounded-xl py-5 mb-5">
          <div className="absolute bg-yellow h-full w-1 rounded-tl-xl rounded-bl-xl"></div>
          <h2 className="font-myFontRegular text-grey-500 text-[14px] ml-4">
            Total Upcoming
          </h2>
          <p className="font-myFontBold text-grey-900 text-[14px] mr-5">
            $194.98
          </p>
        </div>
        <div className="flex relative justify-between items-center bg-beige-100 rounded-xl py-5">
          <div className="absolute bg-cyan h-full w-1 rounded-tl-xl rounded-bl-xl"></div>
          <h2 className="font-myFontRegular text-grey-500 text-[14px] ml-4">
            Due Soon
          </h2>
          <p className="font-myFontBold text-grey-900 text-[14px] mr-5">
            $59.98
          </p>
        </div>
      </div>
    </div>
  );
}
