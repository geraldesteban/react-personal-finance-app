export default function Input({ type, value, onChange, placeholder }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border border-beige-500 rounded-xl py-2 pl-5 mb-5 outline-none focus:border-grey-900"
      required
    />
  );
}
