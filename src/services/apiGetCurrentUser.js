import supabase from "./supabase";

/* Get Current User */
export async function GetCurrentUser() {
  const { data: sessionData, error } = await supabase.auth.getSession();

  if (error) throw new Error("Failed to get session");
  if (!sessionData.session || !sessionData.session.user)
    throw new Error("User not logged in");

  return sessionData.session.user;
}
