import { GetCurrentUser } from "../apiGetCurrentUser";
import supabase from "../supabase";

export async function apiReadBudgets() {
  const currentUser = await GetCurrentUser();

  const { data: dataBudgets, error: errorBudgets } = await supabase
    .from("budgets")
    .select(
      "id, budgetName, maximumSpend, budgetThemeColor, budgetSpent, budgetRemaining"
    )
    .order("created_at", { ascending: true })
    .eq("user_id", currentUser.id);

  if (errorBudgets) throw new Error("Budgets could not be read");

  return dataBudgets;
}
