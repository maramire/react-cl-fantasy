import PasswordInput from "../Input/PasswordInput";
import TextInput from "../Input/TextInput";
import { useContext, useState } from "react";
import AuthContext from "../../store/auth-context";
import useFetch from "../../hooks/use-fetch";
import { useLocation, useNavigate } from "react-router-dom";

function LoginCard() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);
  let navigate = useNavigate();
  let location = useLocation();
  const { postData } = useFetch();

  let from = location.state?.from?.pathname || "/";

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const loginHandler = async (event) => {
    event.preventDefault();

    const url = `http://localhost:8080/login`;
    postData(url, null, { username, password })
      .then((data) => {
        authContext.login(data);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mx-auto my-0 lg:w-3/12 bg-white p-8 rounded-lg shadow-lg">
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
            className="mt-4 text-white w-full p-3 bg-blue-700 rounded-full "
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
