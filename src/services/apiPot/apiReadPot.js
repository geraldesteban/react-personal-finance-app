import { GetCurrentUser } from "../apiGetCurrentUser";
import supabase from "../supabase";

export async function apiReadPot(potId) {
  if (!potId) throw new Error("Pot Id is missing");

  /* Get current User */
  const currentUser = await GetCurrentUser();

  const { data, error } = await supabase
    .from("pots")
    .select("id, potName, targetMoney, potMoney, created_at, potTheme")
    .eq("user_id", currentUser.id)
    .eq("id", potId)
    .maybeSingle();

  if (error) throw new Error("Pots could not be loaded");

  return data;
}
