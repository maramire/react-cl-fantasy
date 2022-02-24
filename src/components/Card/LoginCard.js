import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useServices } from "../../hooks/use-services";

import AuthContext from "../../store/auth-context";
import PasswordInput from "../Input/PasswordInput";
import TextInput from "../Input/TextInput";

function LoginCard() {
  const authContext = useContext(AuthContext);
  const { login } = useServices();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const loginHandler = async (event) => {
    event.preventDefault();

    try {
      const successLoginData = await login({ username, password });
      authContext.login(successLoginData);
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto my-0 lg:w-3/12 bg-slate-300 p-8 rounded-lg shadow-lg">
      <div>
        <div>Iniciar Sesión</div>
        <form className="mt-5">
          <div className="mb-4">
            <TextInput
              value={username}
              onChange={onChangeUsername}
              label="Usuario"
              placeholder="Ingrese usuario"
            />
          </div>
          <div className="mb-4">
            <PasswordInput
              value={password}
              onChange={onChangePassword}
              placeholder="Ingrese contraseña"
            />
          </div>
          <button
            className="mt-4 w-full p-3 bg-blue-700 rounded-full text-white"
            onClick={loginHandler}
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginCard;
