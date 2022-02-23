import { useCallback, useEffect, useState } from "react";
import ReactModal from "react-modal";
import useFetch from "../../hooks/use-fetch";
import { BsXCircleFill } from "react-icons/bs";

function AddPlayerModal(props) {
  const { getData } = useFetch();
  const [players, setPlayers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const fetchPlayers = useCallback(async () => {
    const playersUrl = `http://localhost:8080/players?position=${props.position}`;
    try {
      const players = await getData(playersUrl, null);
      setPlayers(players);
      console.log(players);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [getData, props.position]);

  useEffect(() => {
    if (props.showModal) {
      fetchPlayers();
    } else {
      setPlayers([]);
    }
  }, [fetchPlayers, props.showModal]);

  const handleRadioChange = (e) => {
    setSelectedPlayer(e.target.value);
  };

  const handleRowSelect = (player, e) => {
    setSelectedPlayer(player._id);
  };

  return (
    <ReactModal
      className="absolute inset-40 border bg-slate-800 p-4 text-white"
      overlayClassName="fixed inset-0 bg-black/70"
      isOpen={props.showModal}
      contentLabel="Agregar Jugador."
    >
      <div className="flex flex-col h-full">
        <div className="flex mb-4">
          <button
            className="ml-auto bg-slate-600 rounded"
            onClick={props.handleCloseModal}
          >
            <BsXCircleFill />
          </button>
        </div>
        <div className="flex mb-4 px-6">
          <h1>Agregar Jugador en Posición: {props.position}</h1>
          <button className="bg-sky-700 hover:bg-sky-500 p-3 rounded-lg text-white ml-auto">
            Agregar Jugador
          </button>
        </div>
        {!isLoading && (
          <div className="flex justify-center px-6 overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th>Seleccionar</th>
                  <th>Jugador</th>
                  <th>Equipo</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player) => {
                  return (
                    <tr
                      onClick={handleRowSelect.bind(this, player)}
                      className="cursor-pointer hover:bg-slate-700 dark:hover:bg-gray-700"
                    >
                      <td>
                        <input
                          value={player._id}
                          name="player"
                          onChange={handleRadioChange}
                          checked={selectedPlayer === player._id}
                          type="radio"
                        />
                      </td>
                      <td>{player.name}</td>
                      <td>{player.club.name}</td>
                      <td>0</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </ReactModal>
  );
}

export default AddPlayerModal;
