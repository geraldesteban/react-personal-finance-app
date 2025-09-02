import { useQuery } from "@tanstack/react-query";
import { apiReadPots } from "../../services/apiPot/apiReadPots";

export function usePots() {
  const {
    data: potsData,
    isLoading: isPots,
    error: errorPots,
  } = useQuery({
    queryKey: ["pots"],
    queryFn: apiReadPots,
  });

  return { potsData, isPots, errorPots };
}
