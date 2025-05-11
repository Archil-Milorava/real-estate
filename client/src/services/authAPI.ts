import API from "../config/axiosConfig";
import type {
  AuthResponse,
  User
} from "../types/auth.type";

type Credentials = {
  nickName: string;
  password: string;
};

export const signUp = (credentials: Credentials): Promise<AuthResponse> =>
  API.post("/user/signUp", credentials);

export const signIn = (credentials: Credentials) =>
  API.post("/user/signIn", credentials);

export const signOut = () => API.get("/user/signOut");

export const getCurrentUser = (): Promise<User> => API.get("user/currentUser");
