import CloseModal from "../../assets/icon-close-modal.svg?react";

export default function PotsEditPot({ active, onClose }) {
  if (!active) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative bg-white rounded-xl p-10 z-20 md:p-5 md:mx-10">
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

        <form>
          <label className="block font-myFontBold text-grey-500 text-[12px] mb-2">
            Pot Name
          </label>
          <input
            type="text"
            placeholder=""
            className="w-full border border-beige-500 rounded-xl py-2 pl-5 mb-5"
          />

          <label className="block font-myFontBold text-grey-500 text-[12px] mb-2">
            Target
          </label>
          <input
            type="text"
            placeholder="$"
            className="w-full border border-beige-500 rounded-xl py-2 pl-5 mb-5"
          />

          <label className="block font-myFontBold text-grey-500 text-[12px] mb-2">
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

        <button className="font-myFontBold text-[14px] w-full py-5 bg-grey-900 rounded-xl text-white">
          Save Changes
        </button>
      </div>
    </div>
  );
}
