import { useQuery } from "@tanstack/react-query";
import { getBalance } from "../../services/apiBalance";

export function useBalance() {
  const {
    data: balances,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["balance"],
    queryFn: getBalance,
  });

  return { balances, isLoading, error };
}
