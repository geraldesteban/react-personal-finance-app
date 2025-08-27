export default function OverviewBalanceIncomeExpenses() {
  return (
    <>
      <div className={`flex-1 p-10 rounded-xl text-white bg-grey-900 lg:p-5`}>
        <h2 className={`font-myFontRegular text-[14px] text-white`}>
          Current Balance
        </h2>
        <p className={`font-myFontBold text-[32px] text-white`}>$4,836.00</p>
      </div>
      <div className={`flex-1 p-10 rounded-xl bg-white lg:p-5`}>
        <h2 className={`font-myFontRegular text-[14px] text-grey-500`}>
          Income
        </h2>
        <p className={`font-myFontBold text-[32px] text-grey-900`}>$3,814.25</p>
      </div>
      <div className={`flex-1 p-10 rounded-xl bg-white lg:p-5`}>
        <h2 className={`font-myFontRegular text-[14px] text-grey-500`}>
          Expenses
        </h2>
        <p className={`font-myFontBold text-[32px] text-grey-900`}>$1,700.50</p>
      </div>
    </>
  );
}
