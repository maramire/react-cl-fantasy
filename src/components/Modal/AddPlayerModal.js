import { useCallback, useEffect, useState } from "react";
import { BsXCircleFill } from "react-icons/bs";
import { useServices } from "../../hooks/use-services";
import ReactModal from "react-modal";
import PlayersTable from "../Table/PlayersTable";

function AddPlayerModal(props) {
  const { getPlayersByPosition } = useServices();
  const [players, setPlayers] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const tableColumns = ["Seleccionar", "Jugador", "Club", "Valor"];

  const fetchPlayers = useCallback(async () => {
    try {
      const players = await getPlayersByPosition(props.position);
      setPlayers(players);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [getPlayersByPosition, props.position]);

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
      ariaHideApp={false}
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
            <PlayersTable
              columns={tableColumns}
              data={players}
              selectedPlayer={selectedPlayer}
              handleRowSelect={handleRowSelect}
              handleRadioChange={handleRadioChange}
            />
          </div>
        )}
      </div>
    </ReactModal>
  );
}

export default AddPlayerModal;
