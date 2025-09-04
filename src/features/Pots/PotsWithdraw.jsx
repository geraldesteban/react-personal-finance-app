import CloseModal from "../../assets/icon-close-modal.svg?react";
import { useWithdrawMoney } from "./useWithdrawMoney";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../ui/Spinner";
import { useState } from "react";
import { usePot } from "./usePot";
import { formatCurrency } from "../../utils/formatCurrency";

export default function PotsWithdraw({ active, onClose, potId, potName }) {
  const { withdrawPotMoney, isWithdrawPotMoney, errorWithdrawPotMoney } =
    useWithdrawMoney(onClose);
  const { potData } = usePot(potId);
  const targetMoney = potData?.targetMoney;
  const potMoney = potData?.potMoney;

  const [amountWithdrawPotMoney, setAmountWithdrawPotMoney] = useState(0);

  function handleWithdrawPotMoney(e) {
    e.preventDefault();
    withdrawPotMoney({ pot_id: potId, amount: amountWithdrawPotMoney });
    setAmountWithdrawPotMoney(0);
  }

  function handleCloseModal() {
    onClose();
    setAmountWithdrawPotMoney(0);
  }

  if (isWithdrawPotMoney) return <Spinner />;

  if (errorWithdrawPotMoney)
    return <ErrorMessage errorMessage={errorWithdrawPotMoney} />;

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative bg-white rounded-xl p-10 z-20 md:p-5 lg:mx-10 sm:mx-5">
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-myFontBold text-grey-900 text-[32px]">
            Withdraw from `
            {potName.replace(/\b\w/g, (char) => char.toUpperCase())}`?
          </h2>
          <button onClick={handleCloseModal}>
            <CloseModal />
          </button>
        </div>

        <p className="font-myFontRegular text-grey-500 text-[14px] mb-5">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
          hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet.
        </p>
        <div className="flex justify-between items-center my-3">
          <p className="font-myFontRegular text-grey-500 text-[14px]">
            Pot Money
          </p>
          <p className="font-myFontBold text-grey-900 text-[32px] font-bold">
            {formatCurrency(
              amountWithdrawPotMoney < 0
                ? 0
                : amountWithdrawPotMoney >= potMoney
                ? 0
                : potMoney - amountWithdrawPotMoney
            )}
          </p>
        </div>
        <div className="w-full h-1 rounded-xl bg-black"></div>
        <div className="flex justify-between items-center my-1">
          <p className="font-myFontRegular text-red text-[12px]">5.95%</p>
          <p className="font-myFontRegular text-grey-500 text-[12px]">
            Target of{" "}
            {formatCurrency(
              amountWithdrawPotMoney < 0
                ? targetMoney
                : amountWithdrawPotMoney <= targetMoney
                ? targetMoney + amountWithdrawPotMoney
                : targetMoney
            )}
          </p>
        </div>
        <form onSubmit={handleWithdrawPotMoney}>
          <label className="block font-myFontBold text-grey-500 text-[12px] mb-2">
            Amount to Withdraw
          </label>
          <input
            type="number"
            value={amountWithdrawPotMoney}
            onChange={(e) => setAmountWithdrawPotMoney(Number(e.target.value))}
            placeholder="$"
            className="w-full border border-beige-500 rounded-xl py-2 pl-5 mb-5"
            required
          />
          <button
            type="submit"
            className="font-myFontBold text-[14px] w-full py-5 bg-grey-900 rounded-xl text-white font-bold"
          >
            Confirm Withdrawal
          </button>
        </form>
      </div>
    </div>
  );
}
