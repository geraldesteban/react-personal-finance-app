import { useState } from "react";
import CloseModal from "../../assets/icon-close-modal.svg?react";
import { useUpdatePot } from "./useUpdatePot";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../ui/Spinner";
import SelectThemeColor from "../../ui/SelectThemeColor";

export default function PotsEditPot({ active, onClose, potId }) {
  const { newPot, isNewPot, errorNewPot } = useUpdatePot(onClose);
  const [newPotName, setNewPotName] = useState("");
  const [newTargetMoney, setNewTargetMoney] = useState(0);
  const [newPotTheme, setNewPotTheme] = useState("bg-green");

  function handleEditPot(e) {
    e.preventDefault();

    newPot({
      potId: potId,
      newPotName: newPotName,
      newTargetMoney: newTargetMoney,
      newPotTheme: newPotTheme,
    });

    setNewPotName("");
    setNewTargetMoney(0);
    setNewPotTheme("bg-green");
  }

  if (!active) return null;

  if (isNewPot) return <Spinner />;

  if (errorNewPot) return <ErrorMessage errorMessage={errorNewPot} />;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative bg-white rounded-xl p-10 z-20 md:p-5 md:mx-10 sm:mx-5">
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-myFontBold text-grey-900 text-[32px] sm:text-[20px]">
            Edit Pot
          </h2>
          <button onClick={onClose}>
            <CloseModal />
          </button>
        </div>
        <p className="font-myFontRegular text-grey-500 text-[14px] mb-5">
          If your saving targets change, feel free to update your pots.
        </p>
        <form onSubmit={handleEditPot}>
          <label className="block font-myFontBold text-grey-500 text-[12px] mb-2">
            Pot Name
          </label>
          <input
            type="text"
            value={newPotName}
            onChange={(e) => setNewPotName(e.target.value)}
            placeholder=""
            className="w-full border border-beige-500 rounded-xl py-2 pl-5 mb-5"
            required
          />

          <label className="block font-myFontBold text-grey-500 text-[12px] mb-2">
            Target
          </label>
          <input
            type="number"
            value={newTargetMoney}
            onChange={(e) => setNewTargetMoney(Number(e.target.value))}
            placeholder="$"
            className="w-full border border-beige-500 rounded-xl py-2 pl-5 mb-5"
          />
          <SelectThemeColor
            label={"Theme"}
            value={newPotTheme}
            onChange={(e) => setNewPotTheme(e.target.value)}
          />
          <button
            type="submit"
            className="font-myFontBold text-[14px] w-full py-5 bg-grey-900 rounded-xl text-white"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
