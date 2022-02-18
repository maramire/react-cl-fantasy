import { Link } from "react-router-dom";

function Topbar() {
  return (
    <nav className="px-2 py-3 flex flex-row h-12 bg-white shadow-lg">
      <ul className="flex">
        <li className="px-1">
          <Link to="my-fantasy-team">This is a football app!</Link>
        </li>
      </ul>
      <ul className="flex flex-row ml-auto">
        <li className="px-2">
          <Link to="login">Iniciar Sesión</Link>
        </li>
        <li className="px-2">
          <Link to="signup">Registrarse</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Topbar;
