import { useMutation } from "@tanstack/react-query";
import { apiSignUp } from "../../services/apiAuthentication/apiSignup";
import toast from "react-hot-toast";

export function useSignup() {
  const {
    mutate: signup,
    isPending: isSignup,
    error: errorSignup,
    reset,
  } = useMutation({
    mutationFn: apiSignUp,
    onSuccess: () => {
      toast.success("Account successfully created!");
    },
    onError: (err) => {
      toast.error(err.message);
      reset();
    },
  });

  return { signup, isSignup, errorSignup };
}
