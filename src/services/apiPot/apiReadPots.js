import { GetCurrentUser } from "../apiGetCurrentUser";
import supabase from "../supabase";

/* Get all Pot data */
export async function apiReadPots() {
  /* Get current Login User */
  const currentUser = await GetCurrentUser();

  /* Get all Pot data */
  const { data: potData, error: potDataError } = await supabase
    .from("pots")
    .select("id, potName, targetMoney, potMoney, potTheme")
    .order("created_at", { ascending: true })
    .eq("user_id", currentUser.id);

  /* Error Pot data */
  if (potDataError) throw new Error("Pots could not be loaded");

  return potData;
}
