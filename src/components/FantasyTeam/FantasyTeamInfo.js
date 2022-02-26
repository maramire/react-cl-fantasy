import { BsFillCheckCircleFill, BsXCircleFill } from "react-icons/bs";

function FantasyTeamInfo(props) {
  const onChangeFormation = (e) => {
    props.setFormation(e.target.value);
  };

  return (
    <div className="min-h-full my-auto">
      <div className="mb-5">
        <h1 className="mb-2 text-white">Nombre de equipo</h1>
        <span className="text-gray-400">{props.fantasyTeam.name}</span>
      </div>
      <div className="mb-5">
        <h1 className="mb-2 text-white">Formación</h1>
        <select
          className="w-20"
          name="formation"
          id="formation"
          onChange={onChangeFormation}
          value={props.formation}
        >
          <option value="4-4-2">4-4-2</option>
          <option value="4-3-3">4-3-3</option>
        </select>
      </div>
      <div className="mb-5">
        <h1 className="mb-2 text-white">Presupuesto Disponible</h1>
        <div className="flex">
          <BsFillCheckCircleFill className="m-1 text-green-700" />
          <span className="text-gray-400">1.000.000/1.000.000</span>
        </div>
      </div>
      <div className="mb-5">
        <h1 className="mb-2 text-white">El equipo tiene:</h1>
        <div className="flex justify-start">
          {props.checkIfTeamContains(2, "Portero") ? (
            <BsFillCheckCircleFill className="m-1 text-green-700" />
          ) : (
            <BsXCircleFill className="m-1 text-red-700" />
          )}
          <span className="text-gray-400">2 arqueros</span>
        </div>
        <div className="flex justify-start">
          {props.checkIfTeamContains(5, "Defensa") ? (
            <BsFillCheckCircleFill className="m-1 text-green-700" />
          ) : (
            <BsXCircleFill className="m-1 text-red-700" />
          )}
          <span className="text-gray-400">5 defensas</span>
        </div>
        <div className="flex justify-start">
          {props.checkIfTeamContains(5, "Mediocampista") ? (
            <BsFillCheckCircleFill className="m-1 text-green-700" />
          ) : (
            <BsXCircleFill className="m-1 text-red-700" />
          )}
          <span className="text-gray-400">5 mediocampistas</span>
        </div>
        <div className="flex justify-start">
          {props.checkIfTeamContains(4, "Delantero") ? (
            <BsFillCheckCircleFill className="m-1 text-green-700" />
          ) : (
            <BsXCircleFill className="m-1 text-red-700" />
          )}
          <span className="text-gray-400">4 delanteros</span>
        </div>
      </div>
    </div>
  );
}

export default FantasyTeamInfo;
