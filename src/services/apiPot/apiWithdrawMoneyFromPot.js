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

  if (!potData.potMoney || potData.potMoney < 0) {
    throw new Error("You currently have no Pot Money");
  }

  if (amount > potData.potMoney) {
    throw new Error("Withdrawal amount is higher than current Pot Money");
  }

  /* Update Balance of the User */
  const { error: balancesError } = await supabase
    .from("balances")
    .update({ balance: balanceData.balance + amount })
    .eq("user_id", user.id);

  if (balancesError) throw new Error(balancesError.message);

  /* Update Pot Money and Target Money of the User */
  const { error: potsError } = await supabase
    .from("pots")
    .update({
      potMoney: potData.potMoney - amount,
      targetMoney: potData.targetMoney + amount,
    })
    .eq("user_id", user.id)
    .eq("id", pot_id);

  if (potsError) throw new Error(potsError.message);

  return {
    newBalance: balanceData.balance - amount,
    newPotMoney: potData.potMoney - amount,
    newTargetMoney: potData.targetMoney + amount,
  };
}
