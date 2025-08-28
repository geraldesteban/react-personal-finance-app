import { formatCurrency } from "../../utils/formatCurrency";
import { formatDate } from "../../utils/formatDate";

export default function OverviewTransactionsProfileDetails({
  profileImage,
  profileName,
  transactionMoney,
  transactionDate,
}) {
  return (
    <>
      <div className="flex justify-between py-5 border-b border-grey-100 last:border-none last:pb-0">
        <div className="flex items-center">
          <img
            className="mr-5 rounded-full w-[40px] h-[40px]"
            src={profileImage}
            alt={profileName}
          />
          <h2 className="font-myFontBold text-grey-900 text-[14px]">
            {profileName}
          </h2>
        </div>
        <div>
          <h2
            className={`font-myFontBold text-${
              transactionMoney > 0 ? "green" : "grey-900"
            } text-[14px] text-right mb-1`}
          >
            {transactionMoney > 0 ? "+" : ""}
            {formatCurrency(transactionMoney, "USD")}
          </h2>
          <p className="font-myFontRegular text-grey-500 text-[12px]">
            {formatDate(transactionDate)}
          </p>
        </div>
      </div>
    </>
  );
}
