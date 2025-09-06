import supabase from "../supabase";

export async function getTransactions() {
  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .order("date", { ascending: false });

  if (error) {
    console.error(error);
    throw new Error("Transactions could not be loaded");
  }

  return data;
}
