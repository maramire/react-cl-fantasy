import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="w-2/12 bg-slate-800 shadow-lg">
      <ul className="mt-10">
        <li className="text-center">
          <Link
            to="my-fantasy-team"
            className="text-white block w-full p-2 hover:bg-slate-600 focus:shadow-outline"
          >
            My Fantasy Team
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
