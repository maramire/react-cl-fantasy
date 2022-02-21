import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../store/auth-context";

function Topbar() {
  const authContext = useContext(AuthContext);
  return (
    <nav className="px-2 py-4 flex flex-row h-14 bg-white shadow-lg">
      <ul className="flex">
        <li className="pl-7 px-2">
          <Link to="my-fantasy-team">This is a football app!</Link>
        </li>
      </ul>
      {!authContext.isLoggedIn && (
        <ul className="flex flex-row ml-auto">
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

export default Topbar;
