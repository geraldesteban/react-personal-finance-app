import { format } from "date-fns";
import supabase from "../supabase";

/* Create Budget and Update Budget Spent and Budget Remaining */
export async function apiCreateBudget({
  budgetName,
  maximumSpend,
  budgetThemeColor,
}) {
  /* Get current User */
  const {
    data: { user: currentUser },
    error: errorUser,
  } = await supabase.auth.getUser();

  if (errorUser) throw new Error("User not logged in");

  /* New Budget data */
  const addedBudgetName = budgetName;
  const addedMaximumSpend = maximumSpend;
  const addedBudgetThemeColor = budgetThemeColor;

  if (addedMaximumSpend <= 0) throw new Error("Invalid Maximum Spend");

  /* Get Transactions data */
  const { data: dataTsx, error: errorTsx } = await supabase
    .from("transactions")
    .select("*");

  if (errorTsx) throw new Error("Transaction could not be read");

  /* Get Budget Name */
  const { data: dataBudget, error: errorBudget } = await supabase
    .from("budgets")
    .select("budgetName")
    .eq("user_id", currentUser.id);

  if (errorBudget) throw new Error("Budget could not be Read");

  /* Check if Budget Name already exist */
  if (dataBudget.some((db) => db.budgetName === addedBudgetName))
    throw new Error(`${addedBudgetName} is already exists`);

  /* Create New Budget */
  const { data: budgetInsert, error: budgetError } = await supabase
    .from("budgets")
    .insert([
      {
        user_id: currentUser.id,
        budgetName: addedBudgetName,
        maximumSpend: addedMaximumSpend,
        budgetThemeColor: addedBudgetThemeColor,
      },
    ])
    .select();

  const insertedBudget = budgetInsert[0];
  const budgetId = insertedBudget.id;

  if (budgetError) throw new Error("Budget could not be Created");

  /* Total Spents */
  const totalSpent = dataTsx
    .filter((tsx) => tsx.category.toLowerCase() === budgetName.toLowerCase())
    .filter((tsx) => format(new Date(tsx.date), "M") === "8")
    .map((tsx) => Math.abs(tsx.amount))
    .reduce((acc, curr) => acc + curr, 0);

  /* Total Remaining */
  const remaining = maximumSpend - totalSpent;

  /* Update Budget Total Spents */
  const { error: errorUpdateBudget } = await supabase
    .from("budgets")
    .update({
      budgetSpent: Math.round(totalSpent),
      budgetRemaining: Math.round(remaining),
    })
    .eq("user_id", currentUser.id)
    .eq("id", budgetId);

  if (errorUpdateBudget) throw new Error("Budget could not be updated");

  return {
    totalSpent,
    remaining,
    addedBudgetName,
    addedMaximumSpend,
    addedBudgetThemeColor,
  };
}
