import { useMutation } from "@tanstack/react-query";
import { signUp as signUpFn } from "../../services/apiAuthentication";
import toast from "react-hot-toast";

export function useSignup() {
  const {
    mutate: signup,
    isPending: isSignup,
    error: errorSignup,
  } = useMutation({
    mutationFn: signUpFn,
    onSuccess: () => {
      toast.success("Account successfully created!");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { signup, isSignup, errorSignup };
}
