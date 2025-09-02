import supabase from "../supabase";

export async function apiReadBudgets() {
  const {
    data: { user: currentUser },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) throw new Error("User not logged in");

  const { data: dataBudgets, error: errorBudgets } = await supabase
    .from("budgets")
    .select(
      "id, budgetName, maximumSpend, budgetThemeColor, budgetSpent, budgetRemaining"
    )
    .eq("user_id", currentUser.id);

  if (errorBudgets) throw new Error("Budgets could not be read");

  return dataBudgets;
}
