import { GetCurrentUser } from "../apiGetCurrentUser";
import supabase from "../supabase";

/* Update Balance and Withdraw Money from a Pot */
export async function apiWithdrawMoneyFromPot({ pot_id, amount }) {
  /* Get current Login User */
  const currentUser = await GetCurrentUser();

  /* Get current Balance of the User */
  const { data: balanceData, error: errorBalance } = await supabase
    .from("balances")
    .select("balance")
    .eq("user_id", currentUser.id)
    .single();

  if (errorBalance) throw new Error("Balance could not be Read");

  if (!balanceData || balanceData.balance < 0)
    throw new Error("You currently have no Balance");

  /* Get current Pot Money of the User */
  const { data: potData, error: errorPotData } = await supabase
    .from("pots")
    .select("potName, potMoney, targetMoney")
    .eq("user_id", currentUser.id)
    .eq("id", pot_id)
    .single();

  if (errorPotData) throw new Error(errorPotData.message);

  /* No current Pot Money */
  if (!potData.potMoney || potData.potMoney < 0) {
    throw new Error("You currently have no Pot Money");
  }

  /* Amount higher than current Pot Money */
  if (amount > potData.potMoney) {
    throw new Error("Withdrawal amount is higher than current Pot Money");
  }

  /* Invalid Amount */
  if (amount <= 0) throw new Error("Invalid Amount to Withdraw");

  /* Updated Balance and Pot data */
  const updatedBalance = balanceData.balance + amount;
  const updatedPotMoney = potData.potMoney - amount;

  /* Get Pot Name */
  const potName = potData.potName;
  console.log(potName);

  /* Update Balance of the User */
  const { error: balanceError } = await supabase
    .from("balances")
    .update({ balance: updatedBalance })
    .eq("user_id", currentUser.id);

  if (balanceError) throw new Error("Balance could not be updated");

  /* Update Pot Money and Target Money of the User */
  const { error: potMoneyError } = await supabase
    .from("pots")
    .update({
      potMoney: updatedPotMoney,
    })
    .eq("user_id", currentUser.id)
    .eq("id", pot_id);

  if (potMoneyError)
    throw new Error("Pot Money or Target Money could not be updated");

  return {
    amount,
    potName,
    updatedBalance,
    updatedPotMoney,
  };
}
