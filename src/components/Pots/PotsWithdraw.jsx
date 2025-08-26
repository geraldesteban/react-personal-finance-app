import CloseModal from "../../assets/icon-close-modal.svg?react";

export default function PotsWithdraw({ active, onClose }) {
  if (!active) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative bg-white rounded-xl p-10 z-20">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-grey-900 text-[32px] font-bold">
            Withdraw from `Savings`
          </h2>
          <button onClick={onClose}>
            <CloseModal />
          </button>
        </div>

        <p className="text-grey-500 text-[14px] mb-5">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
          hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet.
        </p>
        <div className="flex justify-between items-center my-3">
          <p className="text-grey-500 text-[14px]">New Amount</p>
          <p className="text-grey-900 text-[32px] font-bold">$139.00</p>
        </div>
        <div className="w-full h-1 rounded-xl bg-black"></div>
        <div className="flex justify-between items-center my-1">
          <p className="text-red] text-[12px]">5.95%</p>
          <p className="text-grey-500 text-[12px]">Target of $2,000</p>
        </div>
        <form>
          <label className="block text-grey-500 text-[12px] font-bold mb-2">
            Amount to Withdraw
          </label>
          <input
            type="text"
            placeholder="$"
            className="w-full border border-beige-500 rounded-xl py-2 pl-5 mb-5"
          />
        </form>

        <button className="w-full py-5 bg-grey-900 rounded-xl text-white font-bold">
          Confirm Withdrawal
        </button>
      </div>
    </div>
  );
}
