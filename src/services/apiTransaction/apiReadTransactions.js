import { PAGE_SIZE } from "../../utils/constants";
import supabase from "../supabase";

export async function apiReadTransactions(
  search = "",
  sort = "latest",
  category = "all_transactions",
  page = 1,
  getAll = false
) {
  let query = supabase.from("transactions").select("*", { count: "exact" });

  /* Search */
  if (search && search.trim() !== "") {
    query = query.ilike("name", `%${search.trim()}%`);
  }

  /* Sort By */
  switch (sort) {
    case "latest":
      query = query.order("date", { ascending: false });
      break;
    case "oldest":
      query = query.order("date", { ascending: true });
      break;
    case "a_to_z":
      query = query.order("name", { ascending: true });
      break;
    case "z_to_a":
      query = query.order("name", { ascending: false });
      break;
    case "highest":
      query = query.order("amount", { ascending: false });
      break;
    case "lowest":
      query = query.order("amount", { ascending: true });
      break;
    default:
      query = query.order("date", { ascending: false });
  }

  /* Category mapping (UI → DB) */
  const categoryMap = {
    entertainment: "Entertainment",
    bills: "Bills",
    groceries: "Groceries",
    dining_out: "Dining Out",
    transportation: "Transportation",
    personal_care: "Personal Care",
  };

  /* Category */
  if (category !== "all_transactions") {
    const dbCategory = categoryMap[category];
    if (dbCategory) {
      query = query.eq("category", dbCategory);
    }
  }

  /* Pagination */
  if (!getAll) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data: dataTransactions, error, count } = await query;

  if (error) throw new Error("Transactions data could not be read");

  /* Page count */
  const pageCount = Math.ceil((count ?? 0) / PAGE_SIZE);

  return { dataTransactions, count, pageCount };
}
