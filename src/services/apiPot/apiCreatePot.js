import supabase from "../supabase";

export async function addPots({ potName, targetMoney, potTheme }) {
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

  const { error: potError } = await supabase.from("pots").insert([
    {
      user_id: user.id,
      potName: addedPotName,
      targetMoney: addedTargetMoney,
      potTheme: addedPotTheme,
    },
  ]);

  if (potError) throw new Error(potError.message);

  return { addedPotName, addedTargetMoney, addedPotTheme };
}
