import supabase from "../supabase";

/* Update Balance and Pot Money */
export async function apiAddMoneyToPot({ pot_id, amount }) {
  /* Get current Login User */
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) throw new Error(userError.message);

  /* Get current Balance of the User */
  const { data: balanceData, error: balanceError } = await supabase
    .from("balances")
    .select("balance")
    .eq("user_id", user.id)
    .single();

  if (balanceError) throw new Error(balanceError.message);
  if (!balanceData || balanceData.balance < 0)
    throw new Error("You currently have no Balance");

  if (amount > balanceData.balance) {
    throw new Error(
      "Amount Pot money to be added is higher than current Balance"
    );
  }

  /* Update Balance of the User */
  await supabase
    .from("balances")
    .update({ balance: balanceData.balance - amount })
    .eq("user_id", user.id);

  /* Get current Pot Money of the User */
  const { data: potData, error: potPotMoneyError } = await supabase
    .from("pots")
    .select("potMoney, targetMoney")
    .eq("user_id", user.id)
    .eq("id", pot_id)
    .single();

  if (potPotMoneyError) throw new Error(potPotMoneyError.message);

  /* Update Pot Money and Target Money of the User */
  await supabase
    .from("pots")
    .update({
      potMoney: potData.potMoney + amount,
      targetMoney: potData.targetMoney - amount,
    })
    .eq("user_id", user.id)
    .eq("id", pot_id);

  return {
    newBalance: balanceData.balance - amount,
    newPotMoney: potData.potMoney + amount,
    newTargetMoney: potData.targetMoney - amount,
  };
}
