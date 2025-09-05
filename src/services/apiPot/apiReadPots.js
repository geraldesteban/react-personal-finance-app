import supabase from "../supabase";

export async function apiReadPots() {
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
    .select("id, potName, targetMoney, potMoney, potTheme")
    .order("created_at", { ascending: true })
    .eq("user_id", user.id);

  if (error) throw new Error("Pots could not be loaded");

  return data;
}
