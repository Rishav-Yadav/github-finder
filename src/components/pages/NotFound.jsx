import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="hero">
      <div className="hero-content text-center text-base-content text-secondary">
        <div className="mx-w-lg ">
          <h2 className="text-8xl mb-8">Oops</h2>
          <p className="text-6xl mb-8">404 ! Page Not Found</p>
          <Link className="btn btn-primary" to="/">
            <FaHome className="mr-2" />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
