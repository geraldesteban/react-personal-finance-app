import supabase from "./supabase";

export async function getBalance() {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    console.error(userError);
    throw new Error("User not logged in");
  }

  const { data, error } = await supabase
    .from("balances")
    .select("id, balance, income, expenses, created_at")
    .eq("user_id", user.id)
    .maybeSingle();

  if (error) {
    console.error(error);
    throw new Error("Balance could not be loaded");
  }

  return data;
}
