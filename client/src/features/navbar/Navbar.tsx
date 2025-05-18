import { MdOutlineHomeWork } from "react-icons/md";
import { Link } from "react-router-dom";
import Avatar from "../../components/ui/Avatar";
import { useCurrentUser } from "../../hooks/authHook";

const navLinkClass = "text-sm font-medium hover:text-primary transition";

const Navbar = () => {
  const { currentUser, isLoading } = useCurrentUser();

  return (
    <nav className="w-full h-24 px-6 md:px-[8rem] flex items-center justify-between">
      {/* Logo & Links */}
      <div className="flex items-center gap-10">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-extrabold text-gray-800"
        >
          <MdOutlineHomeWork className="text-3xl" />
          RealEstate
        </Link>
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <Link to="/" className={navLinkClass}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" className={navLinkClass}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Buttons */}
      {!currentUser && !isLoading ? (
        <div className="flex items-center gap-2">
          <Link
            to={"/signIn"}
            className="bg-transparent duration-300 rounded-sm text-black  hover:bg-gray/20 px-3 py-1 text-sm"
          >
            Sign in
          </Link>
          <Link
            to={"/signUp"}
            className="bg-accent duration-300 rounded-sm text-white hover:opacity-90  px-3 py-1 text-sm"
          >
            Sign up
          </Link>
        </div>
      ) : (
        <Avatar currentUser={currentUser} isLoading={isLoading} />
      )}
    </nav>
  );
};

export default Navbar;
