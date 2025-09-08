import { useState } from "react";
import { useUpdateBudget } from "./useUpdateBudget";
import CloseModal from "../../assets/icon-close-modal.svg?react";
import SelectBudgetCategory from "../../ui/SelectBudgetCategory";
import SelectThemeColor from "../../ui/SelectThemeColor";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../ui/Spinner";

export default function BudgetsEditBudget({ active, onClose, budgetId }) {
  const [editCategory, setEditCategory] = useState("Entertainment");
  const [editMaximumSpend, setEditMaximumSpend] = useState(0);
  const [editTheme, setEditTheme] = useState("#277C78");

  const { updateBudget, isUpdateBudget, errorUpdateBudget } =
    useUpdateBudget(onClose);

  function handleEditBudget(e) {
    e.preventDefault();

    updateBudget({
      budgetId: budgetId,
      editBudgetName: editCategory,
      editMaximumSpend: editMaximumSpend,
      editBudgetTheme: editTheme,
    });

    setEditCategory("Entertainment");
    setEditMaximumSpend(0);
    setEditTheme("#277C78");
  }

  if (!active) return null;

  if (isUpdateBudget) return <Spinner />;

  if (errorUpdateBudget)
    return <ErrorMessage errorMessage={errorUpdateBudget} />;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative bg-white rounded-xl p-10 z-20 md:p-5 md:mx-10 sm:mx-5">
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-myFontBold text-grey-900 text-[32px] sm:text-[20px]">
            Edit Budget
          </h2>
          <button onClick={onClose}>
            <CloseModal />
          </button>
        </div>
        <p className="font-myFontRegular text-grey-500 text-[14px] mb-5">
          As your budgets change, feel free to update your spending limits.
        </p>
        <form onSubmit={handleEditBudget}>
          <SelectBudgetCategory
            label={"Category"}
            value={editCategory}
            onChange={(e) => setEditCategory(e.target.value)}
          />
          <label className="block font-myFontBold text-grey-500 text-[12px] font-bold mb-2">
            Maximum Spend
          </label>
          <input
            type="number"
            value={editMaximumSpend}
            onChange={(e) => setEditMaximumSpend(e.target.value)}
            placeholder="$"
            className="w-full border border-beige-500 rounded-xl py-2 pl-5 mb-5"
          />
          <SelectThemeColor
            label={"Theme"}
            value={editTheme}
            onChange={(e) => setEditTheme(e.target.value)}
          />
          <button
            type="submit"
            className="font-myFontBold text-[14px] text-white w-full py-5 bg-grey-900 rounded-xl  font-bold"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
