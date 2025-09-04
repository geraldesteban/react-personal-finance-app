import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiAddMoneyToPot } from "../../services/apiPot/apiAddMoneyToPot";
import { formatCurrency } from "../../utils/formatCurrency";
import toast from "react-hot-toast";

export function useAddMoney(onClose) {
  const queryClient = useQueryClient();

  const {
    mutate: addPotMoney,
    isPending: isAddPotMoney,
    error: errorAddPotMoney,
    reset,
  } = useMutation({
    mutationFn: apiAddMoneyToPot,
    onSuccess: (result) => {
      toast.success(
        `${formatCurrency(result.amount)} added to the ${result.potName.replace(
          /\b\w/g,
          (char) => char.toUpperCase()
        )} Pot`
      );

      queryClient.invalidateQueries(["balances"]);
      queryClient.invalidateQueries(["pots"]);
      if (onClose) onClose();
    },
    onError: (err) => {
      toast.error(err.message);
      reset();
    },
  });

  return {
    addPotMoney,
    isAddPotMoney,
    errorAddPotMoney,
  };
}
