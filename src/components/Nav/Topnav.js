import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { BsHouseFill } from "react-icons/bs";

function Topnav() {
  const authContext = useContext(AuthContext);
  return (
    <nav className="px-2 py-4 flex flex-row h-14 bg-slate-700 shadow-lg">
      <ul className="flex">
        <li className="mt-1 ml-16 px-4">
          <Link to="my-fantasy-team">
            <BsHouseFill className="text-white" />
          </Link>
        </li>
      </ul>
      {!authContext.isLoggedIn && (
        <ul className="flex flex-row ml-auto text-white">
          <li className="px-2">
            <Link to="login">Iniciar Sesión</Link>
          </li>
          <li className="px-2">
            <Link to="signup">Registrarse</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Topnav;
