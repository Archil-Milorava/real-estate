import { useQuery } from "@tanstack/react-query";
import { getProperty } from "../services/propertyAPI";

export const useGetProperty = (filters: Record<string, string>) => {
  const {
    data: properties,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["properties", filters],
    queryFn: () => getProperty(filters),
  });

  return { properties, error, isLoading };
};
