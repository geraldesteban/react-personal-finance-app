import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiUpdateBudget } from "../../services/apiBudget/apiUpdateBudget";
import toast from "react-hot-toast";

export function useUpdateBudget(onClose) {
  const queryClient = useQueryClient();

  const {
    mutate: updateBudget,
    isPending: isUpdateBudget,
    error: errorUpdateBudget,
    reset,
  } = useMutation({
    mutationFn: apiUpdateBudget,
    onSuccess: () => {
      toast.success("Budget has been updated");

      queryClient.invalidateQueries(["budgets"]);

      if (onClose) onClose();
    },
    onError: (error) => {
      toast.error(error.message);

      reset();
    },
  });

  return { updateBudget, isUpdateBudget, errorUpdateBudget };
}
