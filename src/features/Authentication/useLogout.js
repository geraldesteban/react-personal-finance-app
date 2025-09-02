import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiLogout } from "../../services/apiAuthentication/apiLogout";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    mutate: logout,
    isLogout,
    errorLogout,
  } = useMutation({
    mutationFn: apiLogout,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { logout, isLogout, errorLogout };
}
