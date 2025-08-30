import supabase from "./supabase";

export async function signUp({ email, password }) {
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) throw new Error(error.message);

  if (data.user) {
    const { error: balanceError } = await supabase
      .from("balances")
      .insert([{ user_id: data.user.id }]);
    if (balanceError) throw new Error(balanceError.message);
  }

  return data;
}
