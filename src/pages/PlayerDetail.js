import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { Link } from "react-router-dom";

function PlayerDetail() {
  const [player, setPlayer] = useState([]);
  const [clubs, setClubs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/clubs")
      .then((response) => response.json())
      .then((data) => {
        data.sort(compare);
        setClubs(data);
      });
  }, []);
  let { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/players/${id}`)
      .then((response) => response.json())
      .then((data) => setPlayer(data));
  }, [id]);
  function compare(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  return (
    <>
      <div className="p-5">
        <Link to="/home">Home</Link>
        {" > "}
        <Link to="/clubs">Clubs</Link>
        {" > "}
        <Link to={`/clubs/${player.club?._id}`}>{player.club?.name}</Link>
        {" > "}
        {player.player_name}
      </div>
      <div className="flex justify-center items-center py-5">
        <form className="w-6/12 flex p-4 flex-col gap-y-3 border-solid border-2 border-slate-200 ">
          <label htmlFor="player_name">Player Name</label>
          <input id="player_name" type="text" value={player.player_name} />
          <label htmlFor="player_nation">Player Nation</label>
          <input id="player_nation" type="text" value={player.player_nation} />
          <label htmlFor="player_position">Player Position</label>
          <input
            id="player_position"
            type="text"
            value={player.player_position}
          />
          <label htmlFor="player_birthday">Player Birthdate</label>
          <input
            id="player_birthday"
            type="date"
            value={moment(player.player_birthday).format("YYYY-MM-DD")}
          />
          <label htmlFor="player_joined_date">Player Joined Date</label>
          <input
            id="player_joined_date"
            type="date"
            value={moment(player.player_joined_date).format("YYYY-MM-DD")}
          />
          <label htmlFor="player_cur">Player Quality</label>
          <input id="player_cur" type="text" value={player.player_cur} />
          <label htmlFor="player_club">Player Club</label>
          <select id="player_club">
            {clubs.map((club) => {
              if (club.name === player.club.name) {
                return (
                  <option value={player.team_code_id} selected>
                    {club.name}
                  </option>
                );
              } else {
                return <option value={player.team_code_id}>{club.name}</option>;
              }
            })}
          </select>
          <button className="py-1 px-3 self-end border border-gray-300 hover:border-indigo-300">
            Actualizar
          </button>
        </form>
      </div>
    </>
  );
}

export default PlayerDetail;
