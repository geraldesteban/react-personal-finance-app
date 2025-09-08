import { GetCurrentUser } from "../apiGetCurrentUser";
import supabase from "../supabase";

/* Update Balance and Delete Pot */
export async function apiDeletePot(potId) {
  /* Get current User */
  const currentUser = await GetCurrentUser();

  /* Get the Pot Money */
  const { data: potData, error: errorPotData } = await supabase
    .from("pots")
    .select("potMoney")
    .eq("user_id", currentUser.id)
    .eq("id", potId)
    .single();

  if (errorPotData) throw new Error("Pot Money could not be read");

  /* Get the Balance Money */
  const { data: dataBalance, error: errorBalance } = await supabase
    .from("balances")
    .select("balance")
    .eq("user_id", currentUser.id)
    .single();

  if (errorBalance) throw new Error("Balance could not be read");
  console.log(errorBalance);

  /* Updated Balance */
  const newBalance = dataBalance.balance + potData.potMoney;

  /* Update Balance */
  const { error: errorUpdateBalance } = await supabase
    .from("balances")
    .update({ balance: newBalance })
    .eq("user_id", currentUser.id)
    .single();

  if (errorUpdateBalance) throw new Error("Balance could not be updated");

  /* Delete Pot */
  const { error: errorPot } = await supabase
    .from("pots")
    .delete()
    .eq("id", potId)
    .eq("user_id", currentUser.id);

  if (errorPot) throw new Error("Pot could not be delete");

  return { newBalance, deletedPotId: potId };
}
