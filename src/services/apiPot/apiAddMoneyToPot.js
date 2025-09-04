import supabase from "../supabase";

/* Update Balance and Pot Money */
export async function apiAddMoneyToPot({ pot_id, amount }) {
  /* Get current Login User */
  const {
    data: { user: currentUser },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) throw new Error("User not logged in");

  /* Get current Balance of the User */
  const { data: balanceData, error: balanceError } = await supabase
    .from("balances")
    .select("balance")
    .eq("user_id", currentUser.id)
    .single();

  if (balanceError) throw new Error("Balance could not be Read");

  /* No Balance */
  if (!balanceData || balanceData.balance < 0)
    throw new Error("You currently have no Balance");

  /* Amount is higher than current Balance */
  if (amount > balanceData.balance || amount < 0) {
    throw new Error(
      "Amount Pot money to be added is higher or lower than current Balance"
    );
  }

  /* Get current Pot Money of the User */
  const { data: potData, error: potPotMoneyError } = await supabase
    .from("pots")
    .select("potName, potMoney, targetMoney")
    .eq("user_id", currentUser.id)
    .eq("id", pot_id)
    .single();

  if (potPotMoneyError) throw new Error("Pot could not be Read");

  /* Invalid Amount */
  if (amount <= 0) throw new Error("Invalid Amount to Add");

  if (amount > potData.targetMoney)
    throw new Error("Amount is higher than Target money");

  /* Updated Balance, Pot Money, and Target Money */
  const updatedBalance = balanceData.balance - amount;
  const updatedPotMoney = potData.potMoney + amount;
  const updatedTargetMoney = potData.targetMoney - amount;

  /* Get Pot Name */
  const potName = potData.potName;

  /* Update Pot Money and Target Money of the User */
  const { error: errorPot } = await supabase
    .from("pots")
    .update({
      potMoney: updatedPotMoney,
      targetMoney: updatedTargetMoney,
    })
    .eq("user_id", currentUser.id)
    .eq("id", pot_id);

  if (errorPot)
    throw new Error("Pot Money or Target Money could not be updated");

  /* Update Balance of the User */
  const { error: errorBalance } = await supabase
    .from("balances")
    .update({ balance: updatedBalance })
    .eq("user_id", currentUser.id);

  if (errorBalance) throw new Error("Balance could not be updated");

  return {
    amount,
    potName,
    updatedBalance,
    updatedPotMoney,
    updatedTargetMoney,
  };
}
