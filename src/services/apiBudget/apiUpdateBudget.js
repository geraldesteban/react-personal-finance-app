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

  const newBudgetName = editBudgetName;
  const newMaximumSpend = editMaximumSpend;
  const newBudgetTheme = editBudgetTheme;

  const { error: errorBudget } = await supabase
    .from("budgets")
    .update({
      budgetName: newBudgetName,
      maximumSpend: newMaximumSpend,
      budgetThemeColor: newBudgetTheme,
    })
    .eq("user_id", currentUser.id)
    .eq("id", budgetId);

  if (errorBudget) throw new Error(errorBudget.message);

  return { newBudgetName, newMaximumSpend, newBudgetTheme };
}
