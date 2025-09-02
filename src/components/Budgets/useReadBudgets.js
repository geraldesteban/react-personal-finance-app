import { useQuery } from "@tanstack/react-query";
import { apiReadBudgets } from "../../services/apiBudget/apiReadBudgets";

export function useReadBudgets() {
  const {
    data: dataBudgets,
    isLoading: isDataBudgets,
    error: errorDataBudgets,
  } = useQuery({
    queryKey: ["budgets"],
    queryFn: apiReadBudgets,
  });

  return { dataBudgets, isDataBudgets, errorDataBudgets };
}
