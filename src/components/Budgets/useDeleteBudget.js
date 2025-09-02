import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiDeleteBudget } from "../../services/apiBudget/apiDeleteBudget";
import toast from "react-hot-toast";

export function useDeleteBudget(onClose) {
  const queryClient = useQueryClient();

  const {
    mutate: deleteBudget,
    isPending: isDeleteBudget,
    error: errorDeleteBudget,
  } = useMutation({
    mutationFn: apiDeleteBudget,
    onSuccess: () => {
      toast.success("Budget deleted");

      queryClient.invalidateQueries(["budgets"]);

      if (onClose) onClose();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { deleteBudget, isDeleteBudget, errorDeleteBudget };
}
