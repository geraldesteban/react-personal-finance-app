import supabase from "./supabase";

/* Create Pot */
export async function addPots({ potName, targetMoney }) {
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
    .insert([{ user_id: user.id, potName, targetMoney: Number(targetMoney) }])
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
    .select("id, potName, targetMoney, potMoney, created_at")
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
    .select("id, potName, targetMoney, potMoney, created_at")
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
