import API from "../config/axiosConfig";
import type { Property, Reservation } from "../types/property.type";

type PropertyResponse = {
  count: number;
  data: Property[];
};

type MakeReservationData = {
  propertyId: string;
  startDate: Date;
  endDate: Date;
  guests: number;
  nights: number;
  totalPrice: number;
};

export const getProperty = (
  filters: Record<string, string>
): Promise<PropertyResponse> => API.get(`/property`, { params: filters });

export const getSingleProperty = (id: string): Promise<Property> =>
  API.get(`property/${id}`);

export const makeReservation = (makeReservationData: MakeReservationData) =>
  API.post("property/createReservation", makeReservationData);

export const getMyReservations = (): Promise<Reservation[]> =>
  API.get("property/myReservations");


