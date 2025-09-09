export default function Label({ children }) {
  return (
    <label className="block font-myFontBold text-[12px] text-grey-500 font-bold mb-2">
      {children}
    </label>
  );
}
