import supabase from "./supabase";

/* Login */
export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

/* Signup and Insert Balance*/
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

/* Logout */
export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}
