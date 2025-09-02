import PotIcon from "../../assets/icon-pot.svg?react";
import CheckDetails from "../../ui/CheckDetails";
import { usePots } from "../Pots/usePots";
import { formatCurrency } from "../../utils/formatCurrency";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../ui/Spinner";

function OverviewPots() {
  const { potsData, isPots, errorPots } = usePots();

  const totalSaved = potsData
    ?.map((val) => val.potMoney)
    .reduce((acc, curr) => acc + curr, 0);

  if (isPots)
    return (
      <div className="bg-white p-10 rounded-xl lg:p-5">
        <CheckDetails heading="Pots" span="See Details" seeDetails="pots" />
        <Spinner />
      </div>
    );

  if (errorPots)
    return (
      <div className="bg-white p-10 rounded-xl lg:p-5">
        <CheckDetails heading="Pots" span="See Details" seeDetails="pots" />
        <ErrorMessage />;
      </div>
    );

  return (
    <div className="bg-white p-10 rounded-xl lg:p-5">
      <CheckDetails heading="Pots" span="See Details" seeDetails="pots" />
      <div className="flex items-center justify-between sm:flex-col sm:items-start">
        <div
          className={`flex flex-1 items-center bg-[#F8F4F0] ${
            potsData?.length ? "mr-5" : ""
          } rounded-xl py-5 pr-5 sm:w-full sm:pr-0 sm:mb-5`}
        >
          <PotIcon className="w-[25px] h-[35px] mx-5" />
          <div>
            <h2 className="font-myFontRegular text-grey-500 text-[14px] mb-1">
              Total Saved
            </h2>
            <p className="font-myFontBold text-grey-900 text-[32px]">
              {formatCurrency(totalSaved)}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2">
          {potsData?.slice(0, 4).map((pot, index) => (
            <div
              key={pot.id}
              className={`relative flex items-center ${
                index < 2 ? "mb-4 mr-5 sm:mr-16" : ""
              }`}
            >
              <div
                className={`absolute ${pot.potTheme} w-1 h-full rounded-xl`}
              ></div>
              <div className="ml-5">
                <p className="font-myFontRegular text-grey-500 text-[12px] mb-2">
                  {pot.potName}
                </p>
                <p className="font-myFontBold text-grey-900 text-[14px]">
                  {formatCurrency(pot.potMoney)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OverviewPots;
