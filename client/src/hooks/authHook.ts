import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, signIn, signOut, signUp } from "../services/authAPI";
import toast from "react-hot-toast";

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

export const useSignOut = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: handleSignOut, ...rest } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
      navigate("/list");
      toast.success("Signed out");
    },
    onError: (err) => {
      console.log(err);

      toast.success(err.message);
    },
  });

  return { handleSignOut, ...rest };
};

export const useCurrentUser = () => {
  const { data: currentUser, ...rest } = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    staleTime: Infinity,
  });

  const userId = currentUser?.id;

  return { currentUser, userId, ...rest };
};
