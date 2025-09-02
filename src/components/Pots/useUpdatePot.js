import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiUpdatePot } from "../../services/apiPot/apiUpdatePot";
import toast from "react-hot-toast";

export function useUpdatePot(onClose) {
  const queryClient = useQueryClient();

  const {
    mutate: newPot,
    isPending: isNewPot,
    error: errorNewPot,
    reset,
  } = useMutation({
    mutationFn: apiUpdatePot,
    onSuccess: () => {
      toast.success("Pot has been updated");
      queryClient.invalidateQueries(["pots"]);

      if (onClose) onClose();
    },
    onError: (error) => {
      toast.error(error.message);
      reset();
    },
  });

  return { newPot, isNewPot, errorNewPot };
}
