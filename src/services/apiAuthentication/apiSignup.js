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

  /* Error Signup */
  if (error) throw new Error(error.message);

  /* Insert Balance */
  if (data.user) {
    const { error: errorBalance } = await supabase
      .from("balances")
      .insert([{ user_id: data.user.id }]);
    /* Error Insert Balance */
    if (errorBalance) throw new Error(errorBalance.message);
  }

  return data;
}
