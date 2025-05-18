import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, signIn, signUp } from "../services/authAPI";

export const useSignUp = () => {
  const navigate = useNavigate();
  const { mutate, error, isPending, isError } = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      navigate("/signin");
    },
  });

  return { mutate, error, isPending, isError };
};

export const useSignIn = () => {
  const navigate = useNavigate();
  const { mutate, error, isPending, isError } = useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      navigate("/");
    },
  });

  return { mutate, error, isPending, isError };
};

export const useCurrentUser = () => {
  const { data: currentUser, ...rest } = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    staleTime: Infinity,
  });

  const userId = currentUser?.id

  return { currentUser, userId, ...rest };
};
