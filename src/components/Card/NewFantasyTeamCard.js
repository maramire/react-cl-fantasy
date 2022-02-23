import { useState } from "react";
import TextInput from "../Input/TextInput";
import useFetch from "../../hooks/use-fetch";
import { useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function NewFantasyTeamCard() {
  const [name, setName] = useState("");
  let navigate = useNavigate();
  let location = useLocation();
  const { postData } = useFetch();
  const [cookies] = useCookies(["token", "isLoggedIn"]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  let from = location.state?.from?.pathname || "/my-fantasy-team";

  const createHandler = async (event) => {
    event.preventDefault();

    const url = `http://localhost:8080/fantasyTeams`;
    postData(url, cookies.token, { name })
      .then((data) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col justify-center w-full">
      <div className="mx-auto my-0 lg:w-3/12 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <div>Crear Fantasy Team</div>
          <form className="mt-5">
            <div className="mb-4">
              <TextInput
                value={name}
                onChange={onChangeName}
                label="Nombre"
                placeholder="Ingrese nombre para el equipo."
              />
            </div>
            <button
              className="mt-4 text-black w-full p-3 bg-blue-700 rounded-full "
              onClick={createHandler}
            >
              Crear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewFantasyTeamCard;
