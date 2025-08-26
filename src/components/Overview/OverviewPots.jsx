import PotIcon from "../../assets/icon-pot.svg?react";
import CheckDetails from "../CheckDetails";

function OverviewPots() {
  return (
    <div className="flex-1 bg-white p-10 rounded-xl lg:p-5">
      <CheckDetails heading="Pots" span="See Details" seeDetails="pots" />
      <div className="flex items-center justify-between">
        <div className="flex flex-1 items-center bg-[#F8F4F0] rounded-xl py-5 pr-5">
          <PotIcon className="w-[25px] h-[35px] mx-5" />
          <div>
            <h2 className="text-grey-500 text-[14px] font-semibold mb-1">
              Total Saved
            </h2>
            <p className="text-grey-900 text-[32px] font-bold">$850</p>
          </div>
        </div>
        <div className="flex ml-5">
          <div>
            <div className="relative mb-5">
              <div className="absolute bg-green w-1 h-full rounded-xl"></div>
              <h2 className="text-grey-500 text-[12px] font-semibold ml-5 mb-1">
                Savings
              </h2>
              <p className="text-grey-900 text-[14px] font-bold ml-5">$159</p>
            </div>
            <div className="relative mr-5">
              <div className="absolute bg-navy w-1 h-full rounded-xl"></div>
              <h2 className="text-grey-500 text-[12px] font-semibold ml-5 mb-1">
                Concert Ticket
              </h2>
              <p className="text-grey-900 text-[14px] font-bold ml-5">$110</p>
            </div>
          </div>
          <div>
            <div className="relative mb-5">
              <div className="absolute bg-cyan w-1 h-full rounded-xl"></div>
              <h2 className="text-grey-500 text-[12px] font-semibold ml-5 mb-1">
                Gift
              </h2>
              <p className="text-grey-900 text-[14px] font-bold ml-5">$40</p>
            </div>
            <div className="relative">
              <div className="absolute bg-yellow w-1 h-full rounded-xl"></div>
              <h2 className="text-grey-500 text-[12px] font-semibold ml-5 mb-1">
                New Laptop
              </h2>
              <p className="text-grey-900 text-[14px] font-bold ml-5">$10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewPots;
