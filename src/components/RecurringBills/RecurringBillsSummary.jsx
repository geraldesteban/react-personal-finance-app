export default function RecurringBillsSummary() {
  return (
    <div className="bg-white p-5 rounded-xl">
      <h2 className="font-myFontBoldtext-grey-900 text-[16px]">Summary</h2>
      <div className="flex justify-between items-center border-b border-grey-50text-grey-500 py-2">
        <p className="font-myFontRegular text-grey-500 text-[12px]">
          Paid Bills
        </p>
        <div className="flex items-center">
          <p className="font-myFontBold text-grey-900 text-[12px]">4</p>
          <p className="font-myFontBold text-grey-900 text-[12px]">($190.00)</p>
        </div>
      </div>
      <div className="text-red flex justify-between items-center py-2">
        <p className="font-myFontRegular text-[12px]">Due Soon</p>
        <div className="flex items-center">
          <p className="font-myFontBoldtext-[12px]">2</p>
          <p className="font-myFontBoldtext-[12px]">($59.98)</p>
        </div>
      </div>
    </div>
  );
}
