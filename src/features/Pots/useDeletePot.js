import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiDeletePot } from "../../services/apiPot/apiDeletePot";
import toast from "react-hot-toast";

export function useDeletePot(onClose) {
  const queryClient = useQueryClient();

  const {
    mutate: deletePot,
    isPending: isDeletingPot,
    error: errorDeletingPot,
  } = useMutation({
    mutationFn: apiDeletePot,
    onSuccess: () => {
      toast.success("Pot deleted");

      queryClient.invalidateQueries(["pots"]);
      queryClient.invalidateQueries(["balances"]);

      if (onClose) onClose();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { deletePot, isDeletingPot, errorDeletingPot };
}
