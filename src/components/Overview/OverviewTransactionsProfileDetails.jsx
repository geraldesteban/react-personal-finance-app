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
          <h2 className="text-grey-900 text-[14px] font-bold">{profileName}</h2>
        </div>
        <div className="">
          <h2 className="text-green text-[14px] font-bold">
            {transactionMoney}
          </h2>
          <p className="text-grey-500 text-[12px]">{transactionDate}</p>
        </div>
      </div>
      <div className="h-[1px] w-full bg-grey-100 my-5"></div>
    </>
  );
}
