import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useReadBudgets } from "../features/Budgets/useReadBudgets";
import { formatCurrency } from "../utils/formatCurrency";

export default function PieChartBudget() {
  const { dataBudgets } = useReadBudgets();

  const totalSpent = dataBudgets
    ?.map((db) => db.budgetSpent)
    .reduce((acc, curr) => acc + curr, 0);

  const totalMaximumSpend = dataBudgets
    ?.filter((db) => db.maximumSpend)
    .map((db) => db.maximumSpend)
    .reduce((acc, curr) => acc + curr, 0);

  const chartData = dataBudgets?.map((budget) => ({
    name: budget.budgetName,
    value: budget.budgetSpent,
    color: budget.budgetThemeColor,
  }));

  return (
    <div className="relative flex justify-center items-center w-[400px] h-[400px] mx-auto xl:w-[340px] xl:h-[340px]">
      <PieChart width={400} height={400}>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          innerRadius={100}
          outerRadius={150}
          dataKey="value"
        >
          {chartData?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <div className="absolute flex flex-col justify-center items-center text-center">
        <p className="text-[32px] text-grey-900 font-bold">
          {formatCurrency(totalSpent)}
        </p>
        <p className="text-[12px] text-grey-500">
          of {formatCurrency(totalMaximumSpend)} limit
        </p>
      </div>
    </div>
  );
}
