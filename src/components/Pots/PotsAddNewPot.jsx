import CloseModal from "../../assets/icon-close-modal.svg?react";

export default function BudgetsAddNewBudget({ active, onClose }) {
  if (!active) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative bg-white rounded-xl p-10 z-20 md:p-5 md:mx-10">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-grey-900 text-[32px] font-bold sm:text-[20px]">
            Add New Pot
          </h2>
          <button onClick={onClose}>
            <CloseModal />
          </button>
        </div>

        <p className="text-grey-500 text-[14px] mb-5">
          Create a pot to set savings targets. These can help keep you on track
          as you save for special purchases.
        </p>

        <form>
          <label className="block text-grey-500 text-[12px] font-bold mb-2">
            Pot Name
          </label>
          <input
            type="text"
            placeholder=""
            className="w-full border border-grey-500 rounded-xl py-2 pl-5 mb-5"
          />
          <label className="block text-grey-500 text-[12px] font-bold mb-2">
            Target
          </label>
          <input
            type="text"
            placeholder="$ e.g.2000"
            className="w-full border border-grey-500 rounded-xl py-2 pl-5 mb-5"
          />

          <label className="block text-grey-500 text-[12px] font-bold mb-2">
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
          </select>
        </form>

        <button className="w-full py-5 bg-grey-900 rounded-xl text-white font-bold">
          Add Pot
        </button>
      </div>
    </div>
  );
}
