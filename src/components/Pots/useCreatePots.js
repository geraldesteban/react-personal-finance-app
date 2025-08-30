import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPots } from "../../services/apiPots";
import toast from "react-hot-toast";

export function useCreatePots(onClose) {
  const queryClient = useQueryClient();

  const {
    mutate: addPot,
    isPending,
    error,
  } = useMutation({
    mutationFn: ({ potName, targetMoney }) =>
      addPots({ potName, targetMoney: Number(targetMoney) }),
    onSuccess: () => {
      toast.success("Pot added successfully!");
      queryClient.invalidateQueries(["pots"]);

      if (onClose) onClose();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { addPot, isPending, error };
}
