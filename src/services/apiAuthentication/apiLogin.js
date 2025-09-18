import supabase from "../supabase";

/* Login */
export async function apiLogin({ email, password }) {
  /* Login */
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  /* Error Login */
  if (error) throw new Error(error.message);

  return data;
}
