import { GetCurrentUser } from "../apiGetCurrentUser";
import supabase from "../supabase";

export async function apiReadPots() {
  /* Get current Login User */
  const currentUser = await GetCurrentUser();

  const { data, error } = await supabase
    .from("pots")
    .select("id, potName, targetMoney, potMoney, potTheme")
    .order("created_at", { ascending: true })
    .eq("user_id", currentUser.id);

  if (error) throw new Error("Pots could not be loaded");

  return data;
}
