import { GetCurrentUser } from "../apiGetCurrentUser";
import supabase from "../supabase";

/* Get the Balances of the current User */
export async function apiReadBalances() {
  const currentUser = await GetCurrentUser();

  const { data: balancesData, error: errorBalances } = await supabase
    .from("balances")
    .select("id, balance, income, expenses, created_at")
    .eq("user_id", currentUser.id)
    .maybeSingle();

  if (errorBalances) {
    throw new Error("Balances could not be loaded");
  }

  return balancesData;
}
