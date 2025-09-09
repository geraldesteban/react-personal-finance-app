import { useState } from "react";
import CloseModal from "../../assets/icon-close-modal.svg?react";
import { useCreatePots } from "../Pots/useCreatePots";
import Spinner from "../../ui/Spinner";
import SelectThemeColor from "../../ui/SelectThemeColor";
import Label from "../../ui/Label";
import Input from "../../ui/Input";
import Paragraph from "../../ui/Paragraph";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

export default function BudgetsAddNewBudget({ active, onClose }) {
  const [potName, setPotName] = useState("");
  const [targetMoney, setTargetMoney] = useState("");
  const [potTheme, setPotTheme] = useState("#277C78");
  const { addPot, isAddPot } = useCreatePots(onClose);

  function handleAddPot(e) {
    e.preventDefault();

    addPot({ potName, targetMoney, potTheme });

    setPotName("");
    setPotTheme("");
    setTargetMoney("");
  }

  if (!active) return null;

  if (isAddPot)
    return (
      <div className="fixed inset-0 z-10 flex items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <Modal>
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-myFontBold text-grey-900 text-[32px] sm:text-[20px]">
          Add New Pot
        </h2>
        <Button onClick={onClose}>
          <CloseModal />
        </Button>
      </div>
      <Paragraph>
        Create a pot to set savings targets. These can help keep you on track as
        you save for special purchases.
      </Paragraph>
      <form onSubmit={handleAddPot}>
        <Label>Pot Name</Label>
        <Input
          type={"text"}
          value={potName}
          onChange={(e) => setPotName(e.target.value)}
        />
        <Label>Target</Label>
        <Input
          type={"number"}
          value={targetMoney}
          onChange={(e) => setTargetMoney(Number(e.target.value))}
          placeholder={"$ e.g. 2000"}
        />
        <Label>Theme</Label>
        <SelectThemeColor
          value={potTheme}
          onChange={(e) => setPotTheme(e.target.value)}
        />
        <Button
          type={"submit"}
          className={
            "font-myFontBold text-[14] w-full py-5 bg-grey-900 rounded-xl text-white"
          }
        >
          Add Pot
        </Button>
      </form>
    </Modal>
  );
}
