import { useQuery } from "@tanstack/react-query";
import { getBalance } from "../../services/apiBalance";

export function useBalance() {
  const {
    data: balances,
    isLoading: isBalances,
    error: errorBalances,
  } = useQuery({
    queryKey: ["balance"],
    queryFn: getBalance,
  });

  return { balances, isBalances, errorBalances };
}
