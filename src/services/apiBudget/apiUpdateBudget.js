import { format } from "date-fns";
import supabase from "../supabase";
import { GetCurrentUser } from "../apiGetCurrentUser";

/* Update current Budget */
export async function apiUpdateBudget({
  budgetId,
  editBudgetName,
  editMaximumSpend,
  editBudgetTheme,
}) {
  const currentUser = await GetCurrentUser();

  const { data: dataTsx, error: errorTsx } = await supabase
    .from("transactions")
    .select("*");

  if (errorTsx) throw new Error("Transaction could not be read");

  /* Updated Budget data */
  const newBudgetName = editBudgetName;
  const newMaximumSpend = editMaximumSpend;
  const newBudgetTheme = editBudgetTheme;

  const { data: dataBudget, error: errorId } = await supabase
    .from("budgets")
    .select("id, budgetName")
    .eq("user_id", currentUser.id);

  if (errorId) throw new Error("Budget could not be read");

  /* Check if the Budget name is already exists */
  if (
    dataBudget.some(
      (db) => db.budgetName === newBudgetName && db.id !== budgetId
    )
  ) {
    throw new Error(`Budget "${newBudgetName}" already exists`);
  }

  /* Total Spents */
  const totalSpent = dataTsx
    .filter((tsx) => tsx.category.toLowerCase() === newBudgetName.toLowerCase())
    .filter((tsx) => format(new Date(tsx.date), "M") === "8")
    .map((tsx) => Math.abs(tsx.amount))
    .reduce((acc, curr) => acc + curr, 0);

  /* Total Remaining */
  const remaining = newMaximumSpend - totalSpent;

  const { error: errorBudget } = await supabase
    .from("budgets")
    .update({
      budgetName: newBudgetName,
      maximumSpend: newMaximumSpend,
      budgetThemeColor: newBudgetTheme,
      budgetSpent: totalSpent,
      budgetRemaining: remaining <= 0 ? 0 : remaining,
    })
    .eq("user_id", currentUser.id)
    .eq("id", budgetId);

  if (errorBudget) throw new Error("Budget could not be updated");

  return {
    totalSpent,
    remaining,
    newBudgetName,
    newMaximumSpend,
    newBudgetTheme,
  };
}
