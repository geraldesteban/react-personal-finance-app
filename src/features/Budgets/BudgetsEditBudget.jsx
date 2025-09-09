import { useState } from "react";
import { useUpdateBudget } from "./useUpdateBudget";
import CloseModal from "../../assets/icon-close-modal.svg?react";
import SelectBudgetCategory from "../../ui/SelectBudgetCategory";
import SelectThemeColor from "../../ui/SelectThemeColor";
import Spinner from "../../ui/Spinner";
import Label from "../../ui/Label";
import Input from "../../ui/Input";
import Paragraph from "../../ui/Paragraph";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

export default function BudgetsEditBudget({ active, onClose, budgetId }) {
  const [editCategory, setEditCategory] = useState("Entertainment");
  const [editMaximumSpend, setEditMaximumSpend] = useState("");
  const [editTheme, setEditTheme] = useState("#277C78");

  const { updateBudget, isUpdateBudget } = useUpdateBudget(onClose);

  function handleEditBudget(e) {
    e.preventDefault();

    updateBudget({
      budgetId: budgetId,
      editBudgetName: editCategory,
      editMaximumSpend: editMaximumSpend,
      editBudgetTheme: editTheme,
    });

    setEditCategory("Entertainment");
    setEditMaximumSpend("");
    setEditTheme("#277C78");
  }

  if (!active) return null;

  if (isUpdateBudget)
    return (
      <div className="fixed inset-0 z-10 flex items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <Modal>
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-myFontBold text-grey-900 text-[32px] sm:text-[20px]">
          Edit Budget
        </h2>
        <Button onClick={onClose}>
          <CloseModal />
        </Button>
      </div>
      <Paragraph>
        As your budgets change, feel free to update your spending limits.
      </Paragraph>
      <form onSubmit={handleEditBudget}>
        <Label>Category</Label>
        <SelectBudgetCategory
          value={editCategory}
          onChange={(e) => setEditCategory(e.target.value)}
        />
        <Label>Maximum Spend</Label>
        <Input
          type={"number"}
          value={editMaximumSpend}
          onChange={(e) => setEditMaximumSpend(Number(e.target.value))}
          placeholder={"$ e.g. 2000"}
        />
        <Label>Theme</Label>
        <SelectThemeColor
          value={editTheme}
          onChange={(e) => setEditTheme(e.target.value)}
        />
        <Button
          type={"submit"}
          className={
            "font-myFontBold text-[14px] text-white w-full py-5 bg-grey-900 rounded-xl font-bold"
          }
        >
          Save Changes
        </Button>
      </form>
    </Modal>
  );
}
