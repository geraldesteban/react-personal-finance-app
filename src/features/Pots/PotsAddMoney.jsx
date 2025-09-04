import { useState } from "react";
import CloseModal from "../../assets/icon-close-modal.svg?react";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../ui/Spinner";
import { useAddMoney } from "./useAddMoney";
import { usePot } from "./usePot";
import { formatCurrency } from "../../utils/formatCurrency";

export default function PotsAddMoney({ active, onClose, potId, potName }) {
  const { addPotMoney, isAddPotMoney, errorAddPotMoney } = useAddMoney(onClose);
  const { potData } = usePot(potId);
  const targetMoney = potData?.targetMoney;
  const potMoney = potData?.potMoney;
  const [amountPotMoney, setAmountPotMoney] = useState(0);

  function handleAddPotMoney(e) {
    e.preventDefault();

    addPotMoney({ pot_id: potId, amount: amountPotMoney });
    setAmountPotMoney(0);
  }
  function handleCloseModal() {
    onClose();
    setAmountPotMoney(0);
  }

  if (isAddPotMoney) return <Spinner />;

  if (errorAddPotMoney) return <ErrorMessage errorMessage={errorAddPotMoney} />;

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative bg-white rounded-xl p-10 z-20 md:p-5 lg:mx-10 sm:mx-5">
        <div className="flex justify-between items-center mb-5 sm:text-[20px]">
          <h2 className="font-myFontBold text-grey-900 text-[32px]">
            Add to `{potName.replace(/\b\w/g, (char) => char.toUpperCase())}`
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
          <p className="font-myFontBold text-grey-900 text-[32px]">
            {formatCurrency(amountPotMoney < 0 ? 0 : potMoney + amountPotMoney)}
          </p>
        </div>
        <div className="w-full h-1 rounded-xl bg-black"></div>
        <div className="flex justify-between items-center my-1">
          <p className="font-myFontRegular text-green text-[12px]">27.95%</p>
          <p className="font-myFontRegular text-grey-500 text-[12px]">
            Target of{" "}
            {formatCurrency(
              amountPotMoney < 0
                ? targetMoney
                : amountPotMoney <= targetMoney
                ? targetMoney - amountPotMoney
                : targetMoney
            )}
          </p>
        </div>
        <form onSubmit={handleAddPotMoney}>
          <label className="block font-myFontBold text-grey-500 text-[12px] mb-2">
            Amount to Add
          </label>
          <input
            type="number"
            value={amountPotMoney}
            onChange={(e) => setAmountPotMoney(Number(e.target.value))}
            placeholder="$"
            className="w-full border border-beige-500 rounded-xl py-2 pl-5 mb-5"
            required
          />
          <button
            type="submit"
            disabled={isAddPotMoney}
            className="font-myFontBold text-[14px] w-full py-5 bg-grey-900 rounded-xl text-white"
          >
            Confirm Addition
          </button>
        </form>
      </div>
    </div>
  );
}
