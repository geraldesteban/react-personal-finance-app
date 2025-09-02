import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "../../services/apiTransactions";

export function useTransactions() {
  const {
    data: transactionsData,
    isLoading: isTransactionsData,
    error: errorTransactionsData,
  } = useQuery({
    queryKey: ["transactions"],
    queryFn: getTransactions,
  });

  return { transactionsData, isTransactionsData, errorTransactionsData };
}
