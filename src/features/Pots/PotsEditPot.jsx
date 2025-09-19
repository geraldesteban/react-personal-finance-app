import { useState } from "react";
import CloseModal from "../../assets/icon-close-modal.svg?react";
import { useUpdatePot } from "./useUpdatePot";
import Spinner from "../../ui/Spinner";
import SelectThemeColor from "../../ui/SelectThemeColor";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import Paragraph from "../../ui/Paragraph";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

export default function PotsEditPot({ active, onClose, potId }) {
  const { newPot, isNewPot } = useUpdatePot(onClose);
  const [newPotName, setNewPotName] = useState("");
  const [newTargetMoney, setNewTargetMoney] = useState("");
  const [newPotTheme, setNewPotTheme] = useState("#277C78");

  if (!active) return null;

  if (isNewPot)
    return (
      <div className="fixed inset-0 z-10 flex items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <Modal onClose={onClose}>
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-myFontBold text-grey-900 text-[32px] sm:text-[20px]">
          Edit Pot
        </h2>
        <Button
          onClick={() => {
            onClose();
            setNewPotName("");
            setNewTargetMoney("");
            setNewPotTheme("#277C78");
          }}
        >
          <CloseModal />
        </Button>
      </div>
      <Paragraph>
        If your saving targets change, feel free to update your pots.
      </Paragraph>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          newPot({
            potId: potId,
            newPotName: newPotName,
            newTargetMoney: newTargetMoney,
            newPotTheme: newPotTheme,
          });

          setNewPotName("");
          setNewTargetMoney("");
          setNewPotTheme("#277C78");
        }}
      >
        <Label>Pot Name</Label>
        <Input
          type={"text"}
          value={newPotName}
          onChange={(e) => setNewPotName(e.target.value)}
        />
        <Label>Target</Label>
        <Input
          type={"number"}
          value={newTargetMoney}
          onChange={(e) => setNewTargetMoney(Number(e.target.value))}
          placeholder={"$ e.g. 2000"}
        />
        <Label>Theme</Label>
        <SelectThemeColor
          value={newPotTheme}
          onChange={(e) => setNewPotTheme(e.target.value)}
        />
        <Button
          type={"submit"}
          className={
            "font-myFontBold text-[14px] text-white w-full py-5 bg-grey-900 rounded-xl "
          }
        >
          Save Changes
        </Button>
      </form>
    </Modal>
  );
}
