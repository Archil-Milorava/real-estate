import { useQuery } from "@tanstack/react-query";
import { getProperty } from "../services/propertyAPI";

export const useGetProperty = (filters: Record<string, string>) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["properties", filters],
    queryFn: () => getProperty(filters),
  });

  const properties = data?.data;

  return { properties, error, isLoading };
};
