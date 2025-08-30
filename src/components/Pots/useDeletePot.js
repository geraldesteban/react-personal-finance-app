import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePot as deletePotApi } from "../../services/apiPots";
import toast from "react-hot-toast";

export function useDeletePot(onClose) {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deletePot } = useMutation({
    mutationFn: deletePotApi,
    onSuccess: () => {
      toast.success("Pot deleted");

      queryClient.invalidateQueries({
        queryKey: ["pots"],
      });
      if (onClose) onClose();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isDeleting, deletePot };
}
