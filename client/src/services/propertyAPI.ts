import API from "../config/axiosConfig";
import type { Property } from "../types/property.type";

type PropertyResponse = {
  count: number;
  data: Property[];
};

export const getProperty = (
  filters: Record<string, string>
): Promise<PropertyResponse> => API.get(`/property`, { params: filters });
