export default function OverviewTransactionsProfileDetails({
  profileImage,
  profileName,
  transactionMoney,
  transactionDate,
}) {
  return (
    <>
      <div className="flex justify-between">
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
          <h2 className="font-myFontBold text-green text-[14px] text-right mb-1">
            {transactionMoney}
          </h2>
          <p className="font-myFontRegular text-grey-500 text-[12px]">
            {transactionDate}
          </p>
        </div>
      </div>
      <div className="h-[1px] w-full bg-grey-100 my-5"></div>
    </>
  );
}
