import { fetchCountries } from "../utils/api";
import { useQuery } from "@tanstack/react-query";

export const useCountries = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
    staleTime: 1000 * 60 * 5,
  });
};
