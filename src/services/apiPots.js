import supabase from "./supabase";
import { GetCurrentUser } from "./apiGetCurrentUser";

/* Create Pot */
export async function addPots({ potName, targetMoney, potTheme }) {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    console.error(userError);
    throw new Error("User not logged in");
  }

  const { data, error: potError } = await supabase
    .from("pots")
    .insert([
      {
        user_id: user.id,
        potName,
        targetMoney: Number(targetMoney),
        potTheme,
      },
    ])
    .select();

  if (potError) throw new Error(potError.message);

  return data;
}

/* Read Pots */
export async function getPots() {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    console.error(userError);
    throw new Error("User not logged in");
  }

  const { data, error } = await supabase
    .from("pots")
    .select("id, potName, targetMoney, potMoney, created_at, potTheme")
    .eq("user_id", user.id);

  if (error) throw new Error("Pots could not be loaded");

  return data;
}

/* Read Pot */
export async function getPot(potId) {
  if (!potId) throw new Error("Pot Id is missing");

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    console.error(userError);
    throw new Error("User not logged in");
  }

  const { data, error } = await supabase
    .from("pots")
    .select("id, potName, targetMoney, potMoney, created_at, potTheme")
    .eq("user_id", user.id)
    .eq("id", potId)
    .maybeSingle();

  if (error) throw new Error("Pots could not be loaded");

  return data;
}

/* Update Balance and Pot Money */
export async function addPotMoneyFromBalance({ pot_id, amount }) {
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

/* Update Balance and Withdraw Money from a Pot */
export async function withdrawMoneyFromPot({ pot_id, amount }) {
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

/* Delete Pot */
export async function deletePot(potId) {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) throw new Error("User not logged in");

  const { data, error } = await supabase
    .from("pots")
    .delete()
    .eq("id", potId)
    .eq("user_id", user.id);

  if (error) throw new Error("Pot could not be deleted");

  return data;
}
