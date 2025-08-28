import CloseModal from "../../assets/icon-close-modal.svg?react";

export default function BudgetsEditBudget({ active, onClose }) {
  if (!active) return null;

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

        <form>
          <label className="block font-myFontBold text-grey-500 text-[12px] font-bold mb-2">
            Budget Category
          </label>
          <select
            name="budgets"
            id="budgets"
            className="w-full border border-beige-500] rounded-xl py-2 cursor-pointer pl-5 mb-5"
          >
            <option value="Entertainment">Entertainment</option>
            <option value="Bills">Bills</option>
            <option value="Groceries">Groceries</option>
            <option value="Dining Out">Dining Out</option>
            <option value="Transportation">Transportation</option>
            <option value="Personal Care">Personal Care</option>
            <option value="Education">Education</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Shopping">Shopping</option>
            <option value="General">General</option>
          </select>

          <label className="block font-myFontBold text-grey-500 text-[12px] font-bold mb-2">
            Maximum Spend
          </label>
          <input
            type="text"
            placeholder="$"
            className="w-full border border-beige-500 rounded-xl py-2 pl-5 mb-5"
          />

          <label className="block font-myFontBold text-grey-500 text-[12px] font-bold mb-2">
            Theme
          </label>
          <select
            name="theme"
            id="theme"
            className="w-full border border-beige-500 rounded-xl py-2 cursor-pointer pl-5 mb-5"
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
          </select>
        </form>

        <button className="font-myFontBold text-[14px] text-white w-full py-5 bg-grey-900 rounded-xl  font-bold">
          Save Changes
        </button>
      </div>
    </div>
  );
}
