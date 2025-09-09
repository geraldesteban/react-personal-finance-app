import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiDonePot } from "../../services/apiPot/apiDonePot";
import toast from "react-hot-toast";

export function useDonePot() {
  const queryClient = useQueryClient();

  const {
    mutate: donePot,
    isPending: isDonePot,
    error: errorDonePot,
  } = useMutation({
    mutationFn: apiDonePot,
    onSuccess: () => {
      toast.success("Pot is done");

      queryClient.invalidateQueries(["pots"]);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { donePot, isDonePot, errorDonePot };
}
