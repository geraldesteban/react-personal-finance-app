import { GetCurrentUser } from "../apiGetCurrentUser";
import supabase from "../supabase";

/* Update Balance and Delete Pot */
export async function apiDeletePot(potId) {
  /* Get current User */
  const currentUser = await GetCurrentUser();

  /* Get the Pot Money */
  const { data: potMoney, error: potMoneyError } = await supabase
    .from("pots")
    .select("potMoney")
    .eq("user_id", currentUser.id)
    .eq("id", potId)
    .single();

  /* Error get Pot money */
  if (potMoneyError) throw new Error("Pot Money could not be read");

  /* Get the Balance Money */
  const { data: balanceMoney, error: balanceMoneyError } = await supabase
    .from("balances")
    .select("balance")
    .eq("user_id", currentUser.id)
    .single();

  /* Error get Balance money */
  if (balanceMoneyError) throw new Error("Balance could not be read");

  /* Update Balance */
  const { error: balanceUpdateError } = await supabase
    .from("balances")
    .update({ balance: balanceMoney.balance + potMoney.potMoney })
    .eq("user_id", currentUser.id)
    .single();

  /* Error update Balance money */
  if (balanceUpdateError) throw new Error("Balance could not be updated");

  /* Delete Pot */
  const { error: potDeleteError } = await supabase
    .from("pots")
    .delete()
    .eq("id", potId)
    .eq("user_id", currentUser.id);

  /* Error delete Pot */
  if (potDeleteError) throw new Error("Pot could not be delete");
}
