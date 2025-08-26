export default function BudgetsSpendingSummary() {
  return (
    <div className="flex-1 bg-white rounded-xl p-10 lg:flex lg:items-center lg:justify-between sm:block">
      <div className="text-center">CHART</div>
      <div>
        <h2 className="text-grey-900 text-[20px] font-bold mb-5">
          Spending Summary
        </h2>
        <div className="flex justify-between items-center py-2 border-b border-grey-100">
          <div className="flex items-center relative">
            <div className="absolute w-1 h-full bg-green rounded-xl"></div>
            <p className="text-[#696868] text-[14px] ml-5">Entertainment</p>
          </div>
          <div className="flex items-center">
            <p className="text-grey-900 text-[16px] font-bold mr-2">$15.00</p>
            <p className="text-grey-500 text-[12px]">of $50.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
