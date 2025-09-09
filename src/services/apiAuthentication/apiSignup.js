import supabase from "../supabase";

/* Signup and Insert Balance*/
export async function apiSignUp({ username, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    username,
    email,
    password,
    options: {
      data: { display_name: username },
    },
  });

  if (error) throw new Error(error.message);

  if (data.user) {
    const { error: balanceError } = await supabase
      .from("balances")
      .insert([{ user_id: data.user.id }]);
    if (balanceError) throw new Error(balanceError.message);
  }

  return data;
}
