import supabase from "../supabase";

export async function apiUpdateBudget({
  budgetId,
  editBudgetName,
  editMaximumSpend,
  editBudgetTheme,
}) {
  const {
    data: { user: currentUser },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) throw new Error("User not logged in");

  const { data: dataBudgets, error: errorBudgets } = await supabase
    .from("budgets")
    .select("*")
    .eq("user_id", currentUser.id)
    .eq("id", budgetId)
    .single();

  if (errorBudgets) throw new Error("Budget could not be read");

  const newBudgetName = editBudgetName;
  const newMaximumSpend = editMaximumSpend;
  const newBudgetTheme = editBudgetTheme;

  const { error: errorBudget } = await supabase
    .from("budgets")
    .update({
      budgetName: newBudgetName,
      maximumSpend: newMaximumSpend,
      budgetThemeColor: newBudgetTheme,
      budgetRemaining: newMaximumSpend - dataBudgets.budgetSpent,
    })
    .eq("user_id", currentUser.id)
    .eq("id", budgetId);

  if (errorBudget) throw new Error("Budget could not be updated");

  return {
    newBudgetName,
    newMaximumSpend,
    newBudgetTheme,
  };
}
