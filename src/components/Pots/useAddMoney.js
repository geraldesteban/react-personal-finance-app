import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addPotMoneyFromBalance } from "../../services/apiPots";

export function useAddMoney(onClose) {
  const queryClient = useQueryClient();

  const {
    mutate: addPotMoney,
    isPending: isAddPotMoney,

    error: errorAddPotMoney,
  } = useMutation({
    mutationFn: ({ pot_id, amount }) =>
      addPotMoneyFromBalance({ pot_id, amount }),
    onSuccess: () => {
      toast.success("Money added to Pot");

      queryClient.invalidateQueries(["balances"]);
      queryClient.invalidateQueries(["pots"]);
      if (onClose) onClose();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    addPotMoney,
    isAddPotMoney,
    errorAddPotMoney,
  };
}
