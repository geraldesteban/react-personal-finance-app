import { useState } from "react";
import CloseModal from "../../assets/icon-close-modal.svg?react";
import { useCreatePots } from "../Pots/useCreatePots";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../ui/Spinner";
import SelectThemeColor from "../../ui/SelectThemeColor";

export default function BudgetsAddNewBudget({ active, onClose }) {
  const [potName, setPotName] = useState("");
  const [targetMoney, setTargetMoney] = useState(0);
  const [potTheme, setPotTheme] = useState("bg-green");
  const { addPot, isAddPot, errorAddPot } = useCreatePots(onClose);

  function handleAddPot(e) {
    e.preventDefault();

    addPot({ potName, targetMoney, potTheme });
    setPotName("");
    setPotTheme("");
    setTargetMoney(0);
  }

  if (!active) return null;

  if (errorAddPot) return <ErrorMessage errorMessage={errorAddPot.message} />;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70"></div>
      {isAddPot ? (
        <Spinner />
      ) : (
        <div className="relative bg-white rounded-xl p-10 z-20 md:p-5 md:mx-10 sm:mx-5">
          <div className="flex justify-between items-center mb-5">
            <h2 className="font-myFontBold text-grey-900 text-[32px] sm:text-[20px]">
              Add New Pot
            </h2>
            <button
              onClick={() => {
                onClose();
                setPotName("");
                setTargetMoney(0);
                setPotTheme("bg-green");
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
              className="w-full border border-grey-500 rounded-xl py-2 pl-5 mb-5"
              required
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
              required
            />
            <SelectThemeColor
              label={"Theme"}
              value={potTheme}
              onChange={(e) => setPotTheme(e.target.value)}
            />
            <button
              type="submit"
              disabled={isAddPot}
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
