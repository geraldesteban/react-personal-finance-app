import { GetCurrentUser } from "../apiGetCurrentUser";
import supabase from "../supabase";

/* Add new Pot */
export async function apiCreatePot({ potName, targetMoney, potTheme }) {
  /* Get current User */
  const currentUser = await GetCurrentUser();

  /* Target money <= 0 */
  if (targetMoney <= 0) throw new Error("Invalid amount");

  /* Insert new Pot */
  const { error: createPotError } = await supabase.from("pots").insert([
    {
      user_id: currentUser.id,
      potName,
      targetMoney,
      potTheme,
    },
  ]);

  /* Error inserting new Pot */
  if (createPotError) throw new Error("Pot could not be Insert");
}
