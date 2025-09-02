import supabase from "../supabase";

/* Update Balance and Withdraw Money from a Pot */
export async function apiWithdrawMoneyFromPot({ pot_id, amount }) {
  /* Get current Login User */
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) throw new Error(userError.message);

  /* Get current Balance of the User */
  const { data: balanceData, error: errorBalance } = await supabase
    .from("balances")
    .select("balance")
    .eq("user_id", user.id)
    .single();

  if (errorBalance) throw new Error(errorBalance.message);
  if (!balanceData || balanceData.balance < 0)
    throw new Error("You currently have no Balance");

  /* Get current Pot Money of the User */
  const { data: potData, error: errorPotData } = await supabase
    .from("pots")
    .select("potMoney, targetMoney")
    .eq("user_id", user.id)
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

  /* Updated Balance and Pot data */
  const updatedBalance = balanceData.balance + amount;
  const updatedPotMoney = potData.potMoney - amount;
  const updatedTargetMoney = potData.targetMoney + amount;

  /* Update Balance of the User */
  const { error: balanceError } = await supabase
    .from("balances")
    .update({ balance: updatedBalance })
    .eq("user_id", user.id);

  if (balanceError) throw new Error(balanceError.message);

  /* Update Pot Money and Target Money of the User */
  const { error: potMoneyError } = await supabase
    .from("pots")
    .update({
      potMoney: updatedPotMoney,
      targetMoney: updatedTargetMoney,
    })
    .eq("user_id", user.id)
    .eq("id", pot_id);

  if (potMoneyError) throw new Error(potMoneyError.message);

  return {
    updatedBalance,
    updatedPotMoney,
    updatedTargetMoney,
  };
}
