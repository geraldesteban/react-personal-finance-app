import { GetCurrentUser } from "../apiGetCurrentUser";
import supabase from "../supabase";

export async function apiDeleteBudget(budgetId) {
  const currentUser = await GetCurrentUser();

  const { data: dataBudget, error: errorBudget } = await supabase
    .from("budgets")
    .delete()
    .eq("user_id", currentUser.id)
    .eq("id", budgetId);

  if (errorBudget) throw new Error("Budget could not be deleted");

  return dataBudget;
}
