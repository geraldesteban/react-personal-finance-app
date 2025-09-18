import supabase from "../supabase";

/* Logout */
export async function apiLogout() {
  /* Logout */
  const { error } = await supabase.auth.signOut();

  /* Error Logout */
  if (error) throw new Error(error.message);
}
