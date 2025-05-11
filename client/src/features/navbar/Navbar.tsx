import { MdOutlineHomeWork } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import { useCurrentUser } from "../../hooks/authHook";
import Avatar from "../../components/ui/Avatar";

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
            <Link to="/about" className={navLinkClass}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className={navLinkClass}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/agent" className={navLinkClass}>
              Agent
            </Link>
          </li>
        </ul>
      </div>

      {/* Buttons */}
      {!currentUser && !isLoading ? (
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            Sign in
          </Button>
          <Button variant="primary" size="sm">
            Sign up
          </Button>
        </div>
      ) : (
        <Avatar currentUser={currentUser} />
      )}
    </nav>
  );
};

export default Navbar;
