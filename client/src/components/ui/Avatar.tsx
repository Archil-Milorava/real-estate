import { Link } from "react-router-dom";
import type { User } from "../../types/auth.type";

type AvatarProps = {
  currentUser?: User;
  isLoading: boolean;
};

const Avatar = ({ currentUser, isLoading }: AvatarProps) => {


 if (isLoading) {
    return (
      <div className="h-11 w-11 rounded-full bg-gray-200 animate-pulse" />
    );
  }


  if (!currentUser) return null;

  const fallback = currentUser.nickName?.charAt(0)?.toUpperCase() ?? "?";
  const hasImage = currentUser.profileImage;

  return (
    <Link to={"/profile"} className="h-11 w-11 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 font-semibold text-lg overflow-hidden">
      {hasImage ? (
        <img
          src={currentUser.profileImage}
          alt={currentUser.nickName}
          className="h-full w-full object-cover"
        />
      ) : (
        <span>{fallback}</span>
      )}
    </Link>
  );
};

export default Avatar;
