import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Clubs() {
  let { id } = useParams();
  const [club, setClub] = useState([]);
  const [clubPlayers, setClubPlayers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/clubs/${id}`)
      .then((response) => response.json())
      .then((data) => setClub(data));
  }, [id]);
  useEffect(() => {
    fetch(`http://localhost:3000/clubs/${id}/players`)
      .then((response) => response.json())
      .then((data) => setClubPlayers(data));
  }, [id]);
  return (
    <div>
      <div className="p-5">
        <Link to="/home">Home</Link>
        {" > "}
        <Link to="/clubs">Clubs</Link>
        {" > "}
        {club.name}
      </div>
      <div className="container overflow-auto">
        <div className="px-5 py-2 ">
          <table className="text-left w-full">
            <thead className="bg-gray flex text-black w-full">
              <tr className="flex w-full mb-4">
                <th className="p-4 w-1/4">Nombre</th>
                <th className="p-4 w-1/4">Nacionalidad</th>
                <th className="p-4 w-1/4">Posición</th>
              </tr>
            </thead>
            <tbody
              className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full"
              style={{ height: "70vh" }}
            >
              {clubPlayers.map((element) => (
                <tr key={element._id} className="flex w-full mb-4">
                  <td className="p-4 w-1/4">
                    <Link to={`/players/${element._id}`}>
                      {element.player_name}
                    </Link>
                  </td>
                  <td className="p-4 w-1/4">{element.player_nation}</td>
                  <td className="p-4 w-1/4">{element.player_position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Clubs;
