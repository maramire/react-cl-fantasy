import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="w-2/12 bg-white shadow-lg">
      <ul className="mt-10">
        <li className="text-center">
          <Link
            to="my-fantasy-team"
            className="block w-full p-2 hover:bg-gray-200 focus:shadow-outline"
          >
            <span>My Fantasy Team</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
