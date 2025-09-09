export default function SelectThemeColor({ value, onChange }) {
  return (
    <select
      name="theme"
      id="theme"
      className="w-full border border-grey-500 rounded-xl py-2 cursor-pointer pl-5 mb-5 outline-none focus:border-grey-900"
      value={value}
      onChange={onChange}
    >
      <option value="#277C78">Green</option>
      <option value="#98908B">Beige</option>
      <option value="#82C9D7">Cyan</option>
      <option value="#626070">Navy</option>
      <option value="#C94736">Red</option>
      <option value="#826CB0">Purple</option>
      <option value="#597C7C">Turquoise</option>
      <option value="#93674F">Brown</option>
      <option value="#934F6F">Magenta</option>
      <option value="#3F82B2">Blue</option>
      <option value="#97A0AC0">Grey</option>
      <option value="#7F9161">Army</option>
      <option value="#AF81BA">Pink</option>
      <option value="#F2CDAC">Yellow</option>
      <option value="#BE6C49">Orange</option>
    </select>
  );
}
