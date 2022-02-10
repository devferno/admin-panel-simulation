import { FiUser, FiHome, FiDivide } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

function SideBar() {
  const location = useLocation();

  return (
    <div className="hidden md:block fixed h-full p-2 bg-white">
      <ul className="flex flex-col  m-0">
        <Link to="/">
          <li
            className={
              location.pathname === "/" ? "bg-blue-100 rounded" : "rounded"
            }
          >
            <FiHome fontSize="30px" />
            <div className="font-bold text-gray-700">Home</div>
          </li>
        </Link>
        <Link to="/user">
          <li
            className={
              location.pathname === "/user" ? "bg-blue-100 rounded" : "rounded"
            }
          >
            <FiUser fontSize="30px" />
            <div className="font-bold text-gray-700">User</div>
          </li>
        </Link>
        <Link to="/simulations">
          <li
            className={
              location.pathname === "/simulations"
                ? "bg-blue-100 rounded"
                : "rounded "
            }
          >
            <FiDivide fontSize="30px" />
            <div className="font-bold text-gray-700">Simulations</div>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default SideBar;
