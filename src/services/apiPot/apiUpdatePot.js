import supabase from "../supabase";

export async function apiUpdatePot({
  potId,
  newPotName,
  newTargetMoney,
  newPotTheme,
}) {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) throw new Error("User not logged in");

  if (newTargetMoney <= 0) throw new Error("Invalid Target Money");

  /* Updated Pot data */
  const updatedPotName = newPotName;
  const updatedTargetMoney = newTargetMoney;
  const updatedPotTheme = newPotTheme;

  const { error: potError } = await supabase
    .from("pots")
    .update({
      potName: updatedPotName,
      targetMoney: updatedTargetMoney,
      potTheme: updatedPotTheme,
    })
    .eq("user_id", user.id)
    .eq("id", potId);

  if (potError) throw new Error(potError.message);

  return {
    updatedPotName,
    updatedTargetMoney,
    updatedPotTheme,
  };
}
