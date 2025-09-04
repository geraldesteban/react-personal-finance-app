import { useQuery } from "@tanstack/react-query";
import { apiReadBalances } from "../../services/apiBalance/apiReadBalances";

export function useBalance() {
  const {
    data: balances,
    isLoading: isBalances,
    error: errorBalances,
  } = useQuery({
    queryKey: ["balance"],
    queryFn: apiReadBalances,
  });

  return { balances, isBalances, errorBalances };
}
