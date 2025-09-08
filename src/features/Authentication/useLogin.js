import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiLogin } from "../../services/apiAuthentication/apiLogin";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: login,
    isPending: isLogin,
    reset,
  } = useMutation({
    mutationFn: apiLogin,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);

      navigate("/overview", { replace: true });

      toast.success("Login successfully!");
    },
    onError: (err) => {
      toast.error(err.message);
      reset();
    },
  });

  return { login, isLogin };
}
