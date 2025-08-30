import { useState } from "react";
import CloseModal from "../../assets/icon-close-modal.svg?react";
import { useCreatePots } from "../Pots/useCreatePots";
import Spinner from "../Spinner";

export default function BudgetsAddNewBudget({ active, onClose }) {
  const [potName, setPotName] = useState("");
  const [targetMoney, setTargetMoney] = useState(null);
  const { addPot, isPending } = useCreatePots(onClose);

  function handleAddPot(e) {
    e.preventDefault();
    addPot({ potName, targetMoney });
    setPotName("");
    setTargetMoney(null);
  }

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70"></div>

      {isPending ? (
        <Spinner />
      ) : (
        <div className="relative bg-white rounded-xl p-10 z-20 md:p-5 md:mx-10 sm:mx-5">
          <div className="flex justify-between items-center mb-5">
            <h2 className="font-myFontBold text-grey-900 text-[32px] sm:text-[20px]">
              Add New Pot
            </h2>
            <button
              disabled={isPending}
              onClick={() => {
                onClose();
                setPotName("");
                setTargetMoney(null);
              }}
            >
              <CloseModal />
            </button>
          </div>

          <p className="font-myFontRegular text-grey-500 text-[14px] mb-5">
            Create a pot to set savings targets. These can help keep you on
            track as you save for special purchases.
          </p>

          <form onSubmit={handleAddPot}>
            <label className="block font-myFontBold text-grey-500 text-[12px] mb-2">
              Pot Name
            </label>
            <input
              type="text"
              value={potName}
              onChange={(e) => setPotName(e.target.value)}
              placeholder=""
              className="w-full border border-grey-500 rounded-xl py-2 pl-5 mb-5"
            />
            <label className="block font-myFontBold text-grey-500 text-[12px] mb-2">
              Target
            </label>
            <input
              type="text"
              value={targetMoney}
              onChange={(e) => setTargetMoney(Number(e.target.value))}
              placeholder="$ e.g.2000"
              className="w-full border border-grey-500 rounded-xl py-2 pl-5 mb-5"
            />

            {/* <label className="block font-myFontBold text-grey-500 text-[12px] mb-2">
            Theme
          </label>
          <select
            name="theme"
            id="theme"
            className="w-full border border-grey-500 rounded-xl py-2 cursor-pointer pl-5 mb-5"
          >
            <option value="green">Green</option>
            <option value="beige">Beige</option>
            <option value="cyan">Cyan</option>
            <option value="navy">Navy</option>
            <option value="red">Red</option>
            <option value="purple">Purple</option>
            <option value="turquoise">Turquoise</option>
            <option value="brown">Brown</option>
            <option value="magenta">Magenta</option>
            <option value="blue">Blue</option>
            <option value="grey">Grey</option>
            <option value="army">Army</option>
            <option value="pink">Pink</option>
            <option value="orange">Orange</option>
          </select> */}
            <button
              type="submit"
              disabled={isPending}
              className="font-myFontBold text-[14] w-full py-5 bg-grey-900 rounded-xl text-white"
            >
              Add Pot
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
