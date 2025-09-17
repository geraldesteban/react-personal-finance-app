import { GetCurrentUser } from "../apiGetCurrentUser";
import supabase from "../supabase";

/* Delete done Pot */
export async function apiDonePot(potId) {
  /* Get current User */
  const currentUser = await GetCurrentUser();

  /* Delete Pot */
  const { error: potDoneDeleteError } = await supabase
    .from("pots")
    .delete()
    .eq("id", potId)
    .eq("user_id", currentUser.id);

  /* Error Pot done delete */
  if (potDoneDeleteError) throw new Error("Pot could not be delete");
}
