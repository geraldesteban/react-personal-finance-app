import { useMutation } from "@tanstack/react-query";
import { apiLogin } from "../../services/apiAuthentication/apiLogin";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();

  const {
    mutate: login,
    isPending: isLogin,
    error: errorLogin,
  } = useMutation({
    mutationFn: apiLogin,
    onSuccess: () => {
      navigate("/overview");
      toast.success("Login successfully!");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { login, isLogin, errorLogin };
}
