import { useQuery } from "@tanstack/react-query";
import { getPots } from "../../services/apiPots";

export function usePots() {
  const {
    data: potsData,
    isLoading: isPots,
    error: errorPots,
  } = useQuery({
    queryKey: ["pots"],
    queryFn: getPots,
  });

  return { potsData, isPots, errorPots };
}
