import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "../../services/apiTransactions";

export function useTransactions() {
  const {
    data: transactionstest,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["transactions"],
    queryFn: getTransactions,
  });

  return { transactionstest, isLoading, error };
}
