import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="w-3/12 bg-white rounded p-2 shadow-lg">
      <ul className="space-y-2 text-sm">
        <li>
          <Link
            to="home"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200  focus:shadow-outline"
          >
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="clubs"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200  focus:shadow-outline"
          >
            <span>Clubs</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
