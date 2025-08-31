import supabase from "./supabase";

/* Get Current User */
export async function GetCurrentUser() {
  const {
    data: { user: currentUser },
    error: errorCurrentUser,
  } = await supabase.auth.getUser();

  if (errorCurrentUser) throw new Error("Current User not logged in");

  return currentUser;
}
