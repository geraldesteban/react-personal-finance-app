import { useQuery } from "@tanstack/react-query";
import { apiReadTransactions } from "../../services/apiTransaction/apiReadTransactions";

export function useTransactions(
  search = "",
  sort = "latest",
  category = "alltransactions",
  page = 1,
  getAll = false
) {
  const {
    data,
    isLoading: isTransactionsData,
    error: errorTransactionsData,
  } = useQuery({
    queryKey: ["transactions", search, sort, category, page, getAll],
    queryFn: () => apiReadTransactions(search, sort, category, page, getAll),
    keepPreviousData: true,
  });

  return {
    transactionsData: data?.transactionsData ?? [],
    count: data?.count ?? 0,
    pageCount: data?.pageCount ?? 1,
    isTransactionsData,
    errorTransactionsData,
  };
}
