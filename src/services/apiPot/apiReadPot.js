import supabase from "../supabase";

export async function apiReadPot(potId) {
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
