import { GetCurrentUser } from "../apiGetCurrentUser";
import supabase from "../supabase";

/* Update a Pot */
export async function apiUpdatePot({
  potId,
  newPotName,
  newTargetMoney,
  newPotTheme,
}) {
  /* Get current Login User */
  const currentUser = await GetCurrentUser();

  /* Invalid New Target money */
  if (newTargetMoney <= 0) throw new Error("Invalid Target Money");

  /* Update a Pot */
  const { error: potUpdateError } = await supabase
    .from("pots")
    .update({
      potName: newPotName,
      targetMoney: newTargetMoney,
      potTheme: newPotTheme,
    })
    .eq("user_id", currentUser.id)
    .eq("id", potId);

  /* Error Pot update */
  if (potUpdateError) throw new Error("Pot could not be updated");
}
