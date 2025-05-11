import type { User } from "../../types/auth.type";

type AvatarProps = {
  currentUser?: User;
};

const Avatar = ({ currentUser }: AvatarProps) => {
  if (!currentUser) return null;
  return (
    <div>
      <img
        className="h-11 w-11 overflow-hidden rounded-full object-cover"
        src={currentUser?.profileImage}
        alt={currentUser?.nickName}
      />
    </div>
  );
};

export default Avatar;
