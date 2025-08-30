import { useQuery } from "@tanstack/react-query";
import { getPots } from "../../services/apiPots";

export function usePots() {
  const {
    data: dataPots,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pots"],
    queryFn: getPots,
  });

  return { dataPots, isLoading, error };
}
