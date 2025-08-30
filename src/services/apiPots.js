import supabase from "./supabase";

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

export async function deletePot(potId) {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) throw new Error("User not logged in");

  const { data, error } = await supabase.from("pots").delete().eq("id", potId);

  if (error) throw new Error("Pot could not be deleted");

  return data;
}
