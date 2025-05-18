import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getProperty,
  getSingleProperty,
  makeReservation,
} from "../services/propertyAPI";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useGetProperty = (filters: Record<string, string>) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["properties", filters],
    queryFn: () => getProperty(filters),
  });

  const properties = data?.data;

  return { properties, error, isLoading };
};

export const useGetSingleProperty = (id: string) => {
  const { data: property, ...rest } = useQuery({
    queryKey: ["property", id],
    queryFn: () => getSingleProperty(id),
  });

  return { property, ...rest };
};

export const useMakeReservation = () => {
  const navigate = useNavigate();
  const { mutate: createReservations, ...rest } = useMutation({
    mutationFn: makeReservation,
    onSuccess: () => {
      toast.success("Reservation created");
      navigate("/profile");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createReservations, ...rest };
};
