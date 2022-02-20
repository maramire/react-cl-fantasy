import PasswordInput from "../Input/PasswordInput";
import TextInput from "../Input/TextInput";
import { useContext, useState } from "react";
import AuthContext from "../../store/auth-context";
import useFetch from "../../hooks/use-fetch";

function LoginCard() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);
  const { fetchData } = useFetch();

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const loginHandler = async (event) => {
    event.preventDefault();
    const url = `http://localhost:3000/login`;
    const options = {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetchData(url, options).then((data) => {
      authContext.login(data);
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
