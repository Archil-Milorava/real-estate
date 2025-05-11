export type AuthResponse = {
  status: string;
  message: string;
};


export type User = {
  id: string;
  nickName: string;
  profileImage?: string;
  createdAt: string;
};
