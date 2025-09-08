import supabase from "../supabase";

export async function apiLogin({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error("Email or Password is Incorrect!");

  return data;
}
