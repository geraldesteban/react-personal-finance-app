import { useState } from "react";
import { useCreateBudget } from "./useCreateBudget";
import CloseModal from "../../assets/icon-close-modal.svg?react";
import SelectThemeColor from "../../ui/SelectThemeColor";
import SelectBudgetCategory from "../../ui/SelectBudgetCategory";
import Spinner from "../../ui/Spinner";
import Label from "../../ui/Label";
import Input from "../../ui/Input";
import Paragraph from "../../ui/Paragraph";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

export default function BudgetsAddNewBudget({ active, onClose }) {
  const { createBudget, isBudget } = useCreateBudget(onClose);
  const [budgetName, setBudgetName] = useState("Entertainment");
  const [maximumSpend, setMaximumSpend] = useState("");
  const [budgetThemeColor, setBudgetTheme] = useState("#277C78");

  function handleCreateBudget(e) {
    e.preventDefault();

    createBudget({ budgetName, maximumSpend, budgetThemeColor });
    setBudgetName("Entertainment");
    setMaximumSpend("");
    setBudgetTheme("#277C78");
  }

  if (!active) return null;

  if (isBudget)
    return (
      <div className="fixed inset-0 z-10 flex items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <Modal>
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-myFontBold text-[32px] text-grey-900 sm:text-[20px]">
          Add New Budget
        </h2>
        <Button onClick={onClose}>
          <CloseModal />
        </Button>
      </div>
      <Paragraph>
        Choose a category to set a spending budget. These categories can help
        you monitor spending.
      </Paragraph>
      <form onSubmit={handleCreateBudget}>
        <Label>Category</Label>
        <SelectBudgetCategory
          value={budgetName}
          onChange={(e) => setBudgetName(e.target.value)}
        />
        <Label>Maximum Spend</Label>
        <Input
          type={"number"}
          value={maximumSpend}
          onChange={(e) => setMaximumSpend(Number(e.target.value))}
          placeholder={"$ e.g. 2000"}
        />
        <Label>Theme</Label>
        <SelectThemeColor
          value={budgetThemeColor}
          onChange={(e) => setBudgetTheme(e.target.value)}
        />
        <Button
          type={"submit"}
          className={
            "w-full py-5 bg-grey-900 text-white font-myFontBold text-[14px] rounded-xl font-bold"
          }
        >
          Add Budget
        </Button>
      </form>
    </Modal>
  );
}
