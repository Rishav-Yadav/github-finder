import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar({ title }) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-base-100 text-base-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline text-3xl pr-2 " />
          <Link to="/" className="font-bold text-xl align-middle">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.defaultProps = { title: "GitHub Finder" };
export default Navbar;
