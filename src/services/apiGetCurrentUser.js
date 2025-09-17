import supabase from "./supabase";

/* Get Current User */
export async function GetCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  /* Get User */
  const { data, error: getUserError } = await supabase.auth.getUser();

  /* Get User error */
  if (getUserError) throw new Error("Invalid User");

  return data?.user;
}
