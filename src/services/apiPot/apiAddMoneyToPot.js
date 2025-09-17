import { GetCurrentUser } from "../apiGetCurrentUser";
import supabase from "../supabase";

/* Update Balance and Pot Money */
export async function apiAddMoneyToPot({ pot_id, amount }) {
  /* Get current Login User */
  const currentUser = await GetCurrentUser();

  /* Get current Balance of the User */
  const { data: currentBalance, error: currentBalanceError } = await supabase
    .from("balances")
    .select("balance")
    .eq("user_id", currentUser.id)
    .single();

  /* Error get current Balance */
  if (currentBalanceError) throw new Error("Balance could not be Read");

  /* No Balance */
  if (!currentBalance || currentBalance.balance < 0)
    throw new Error("You currently have no Balance");

  /* Amount is higher than current Balance */
  if (amount > currentBalance.balance || amount < 0) {
    throw new Error(
      "Amount Pot money to be added is higher or lower than current Balance"
    );
  }

  /* Get current Pot Money of the User */
  const { data: currentPotMoney, error: currentPotMoneyError } = await supabase
    .from("pots")
    .select("potName, potMoney, targetMoney")
    .eq("user_id", currentUser.id)
    .eq("id", pot_id)
    .single();

  /* Error get current Pot money */
  if (currentPotMoneyError) throw new Error("Pot could not be Read");

  /* Invalid Amount */
  if (amount <= 0) throw new Error("Invalid Amount to Add");

  /* Amount is higher than Target money */
  if (amount > currentPotMoney.targetMoney)
    throw new Error("Amount is higher than Target money");

  /* Get Pot Name */
  const potName = currentPotMoney.potName;

  /* Update Pot Money and Target Money of the User */
  const { error: errorPot } = await supabase
    .from("pots")
    .update({
      potMoney: currentPotMoney.potMoney + amount,
    })
    .eq("user_id", currentUser.id)
    .eq("id", pot_id);

  /* Error update Pot */
  if (errorPot)
    throw new Error("Pot Money or Target Money could not be updated");

  /* Update Balance of the User */
  const { error: errorBalance } = await supabase
    .from("balances")
    .update({ balance: currentBalance.balance - amount })
    .eq("user_id", currentUser.id);

  /* Error update Balance */
  if (errorBalance) throw new Error("Balance could not be updated");

  return {
    amount,
    potName,
  };
}
