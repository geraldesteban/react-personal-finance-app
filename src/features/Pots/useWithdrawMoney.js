import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiWithdrawMoneyFromPot } from "../../services/apiPot/apiWithdrawMoneyFromPot";
import { formatCurrency } from "../../utils/formatCurrency";
import toast from "react-hot-toast";

export function useWithdrawMoney(onClose) {
  const queryClient = useQueryClient();

  const {
    mutate: withdrawPotMoney,
    isPending: isWithdrawPotMoney,
    error: errorWithdrawPotMoney,
    reset,
  } = useMutation({
    mutationFn: apiWithdrawMoneyFromPot,
    onSuccess: (result) => {
      toast.success(
        `Withdraw ${formatCurrency(
          result.amount
        )} from ${result.potName.replace(/\b\w/g, (char) =>
          char.toUpperCase()
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
    withdrawPotMoney,
    isWithdrawPotMoney,
    errorWithdrawPotMoney,
  };
}
