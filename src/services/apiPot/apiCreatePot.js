import supabase from "../supabase";

export async function apiCreatePot({ potName, targetMoney, potTheme }) {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    throw new Error("User not logged in");
  }

  const addedPotName = potName;
  const addedTargetMoney = targetMoney;
  const addedPotTheme = potTheme;

  if (addedTargetMoney <= 0) throw new Error("Invalid amount");

  const { error: potError } = await supabase.from("pots").insert([
    {
      user_id: user.id,
      potName: addedPotName,
      targetMoney: addedTargetMoney,
      potTheme: addedPotTheme,
    },
  ]);

  if (potError) throw new Error("Pot could not be Insert");

  return { addedPotName, addedTargetMoney, addedPotTheme };
}
