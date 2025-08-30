import supabase from "./supabase";

export async function getTransactions() {
  let query = supabase
    .from("transactions")
    .select("id, avatar, name, category, date, amount, recurring")
    .order("name", { ascending: true });

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Transactions could not be loaded");
  }

  return data;
}
