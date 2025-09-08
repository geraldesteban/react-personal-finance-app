import { useQuery } from "@tanstack/react-query";
import { GetCurrentUser } from "../../services/apiGetCurrentUser";

export function useUser() {
  const { isLoading: isLogin, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: GetCurrentUser,
  });

  return { isLogin, user, isAuthenticated: user?.role === "authenticated" };
}
