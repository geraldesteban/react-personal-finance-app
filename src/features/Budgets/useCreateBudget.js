import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiCreateBudget } from "../../services/apiBudget/apiCreateBudget";
import toast from "react-hot-toast";

export function useCreateBudget(onClose) {
  const queryClient = useQueryClient();

  const {
    mutate: createBudget,
    isPending: isBudget,
    error: budgetError,
    data: spents,
    reset,
  } = useMutation({
    mutationFn: apiCreateBudget,
    onSuccess: () => {
      toast.success("Budget added successfully");

      queryClient.invalidateQueries(["budgets"]);
      queryClient.invalidateQueries(["transactions"]);

      if (onClose) onClose();
    },
    onError: (error) => {
      toast.error(error.message);

      reset();
    },
  });

  return { createBudget, isBudget, budgetError, spents };
}
