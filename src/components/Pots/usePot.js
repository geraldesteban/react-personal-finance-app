import { useQuery } from "@tanstack/react-query";
import { apiReadPot } from "../../services/apiPot/apiReadPot";

export function usePot(potId) {
  const {
    data: potData,
    isLoading: isPot,
    error: errorPot,
  } = useQuery({
    queryKey: ["pots", potId],
    queryFn: () => apiReadPot(potId),
  });

  return { potData, isPot, errorPot };
}
