import { useQuery } from "@tanstack/react-query";
import { getPot } from "../../services/apiPots";

export function usePot(potId) {
  const {
    data: potData,
    isLoading: isPot,
    error: errorPot,
  } = useQuery({
    queryKey: ["pots", potId],
    queryFn: () => getPot(potId),
  });

  return { potData, isPot, errorPot };
}
