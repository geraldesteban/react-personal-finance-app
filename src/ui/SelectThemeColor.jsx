export default function SelectThemeColor({ label, value, onChange }) {
  return (
    <>
      <label className="block font-myFontBold text-grey-500 text-[12px] mb-2">
        {label}
      </label>
      <select
        name="theme"
        id="theme"
        className="w-full border border-grey-500 rounded-xl py-2 cursor-pointer pl-5 mb-5"
        value={value}
        onChange={onChange}
      >
        <option value="bg-green">Green</option>
        <option value="bg-beige-500">Beige</option>
        <option value="bg-cyan">Cyan</option>
        <option value="bg-navy">Navy</option>
        <option value="bg-red">Red</option>
        <option value="bg-purple">Purple</option>
        <option value="bg-turquoise">Turquoise</option>
        <option value="bg-brown">Brown</option>
        <option value="bg-magenta">Magenta</option>
        <option value="bg-blue">Blue</option>
        <option value="bg-grey-900">Grey</option>
        <option value="bg-armyGreen">Army</option>
        <option value="bg-pink">Pink</option>
        <option value="bg-orange">Orange</option>
      </select>
    </>
  );
}
