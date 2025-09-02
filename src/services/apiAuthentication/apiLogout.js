import supabase from "../supabase";

export async function apiLogout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}
