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

  const { data: potData, error: potError } = await supabase
    .from("pots")
    .update({
      potName: newPotName,
      targetMoney: newTargetMoney,
      potTheme: newPotTheme,
    })
    .eq("user_id", user.id)
    .eq("id", potId);

  if (potError) throw new Error(potError.message);

  return { potData };
}
