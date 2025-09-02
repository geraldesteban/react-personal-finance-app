import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPots } from "../../services/apiPot/apiCreatePot";
import toast from "react-hot-toast";

export function useCreatePots(onClose) {
  const queryClient = useQueryClient();

  const {
    mutate: addPot,
    isPending: isAddPot,
    error: errorAddPot,
  } = useMutation({
    mutationFn: addPots,
    onSuccess: () => {
      toast.success("Pot added successfully");

      queryClient.invalidateQueries(["pots"]);

      if (onClose) onClose();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { addPot, isAddPot, errorAddPot };
}
