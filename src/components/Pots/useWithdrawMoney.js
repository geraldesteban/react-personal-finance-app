import { useMutation, useQueryClient } from "@tanstack/react-query";
import { withdrawMoneyFromPot } from "../../services/apiPots";
import toast from "react-hot-toast";

export function useWithdrawMoney(onClose) {
  const queryClient = useQueryClient();

  const {
    mutate: withdrawPotMoney,
    isPending: isWithdrawPotMoney,
    error: errorWithdrawPotMoney,
    reset,
  } = useMutation({
    mutationFn: ({ pot_id, amount }) =>
      withdrawMoneyFromPot({ pot_id, amount }),
    onSuccess: () => {
      toast.success("Withdraw money from Pot");

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
    withdrawPotMoney,
    isWithdrawPotMoney,
    errorWithdrawPotMoney,
  };
}
