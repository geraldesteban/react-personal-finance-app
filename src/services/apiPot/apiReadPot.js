import { GetCurrentUser } from "../apiGetCurrentUser";
import supabase from "../supabase";

/* Get Pot data based on Id */
export async function apiReadPot(potId) {
  /* No Pot Id */
  if (!potId) throw new Error("Pot Id is missing");

  /* Get current User */
  const currentUser = await GetCurrentUser();

  /* Get Pot data based on Id */
  const { data: potData, error: potDataError } = await supabase
    .from("pots")
    .select("id, potName, targetMoney, potMoney, potTheme")
    .eq("user_id", currentUser.id)
    .eq("id", potId)
    .maybeSingle();

  /* Error Pot data */
  if (potDataError) throw new Error("Pots could not be loaded");

  return potData;
}
