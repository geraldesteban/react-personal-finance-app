import supabase from "./supabase";

export async function getBalance() {
  let query = supabase
    .from("balances")
    .select("id, balance, income, expenses, created_at");

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Balance could not be loaded");
  }

  return data;
}
