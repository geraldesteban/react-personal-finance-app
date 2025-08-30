import { useMutation } from "@tanstack/react-query";
import { login as loginFn } from "../../services/apiAuthentication";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();

  const {
    mutate: login,
    isPending,
    error,
  } = useMutation({
    mutationFn: loginFn,
    onSuccess: () => {
      navigate("/overview");
      toast.success("Login successfully!");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { login, isPending, error };
}
