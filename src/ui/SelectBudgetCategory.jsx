export default function SelectBudgetCategory({ value, onChange }) {
  return (
    <select
      name="budgets"
      id="budgets"
      className="w-full border border-beige-500 rounded-xl py-2 cursor-pointer pl-5 mb-5 outline-none focus:border-grey-900"
      value={value}
      onChange={onChange}
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
  );
}
