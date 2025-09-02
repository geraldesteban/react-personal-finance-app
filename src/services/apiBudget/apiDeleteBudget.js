import supabase from "../supabase";

export async function apiDeleteBudget(budgetId) {
  const {
    data: { user: currentUser },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) throw new Error("User not logged in");

  const { data: dataBudget, error: errorBudget } = await supabase
    .from("budgets")
    .delete()
    .eq("user_id", currentUser.id)
    .eq("id", budgetId);

  if (errorBudget) throw new Error("Budget could not be deleted");

  return dataBudget;
}
