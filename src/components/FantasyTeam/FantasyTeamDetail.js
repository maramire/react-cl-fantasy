import PlayerCard from "../Card/PlayerCard";
import { useCallback, useEffect, useState } from "react";
import AddPlayerModal from "../Modal/AddPlayerModal";
import useFetch from "../../hooks/use-fetch";
import { useCookies } from "react-cookie";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsXCircleFill } from "react-icons/bs";
import FantasyTeamLineup from "./FantasyTeamLineup";

function FantasyTeamDetail(props) {
  const [showModal, setShowModal] = useState(false);
  const [position, setPosition] = useState("");
  const { getData } = useFetch();
  const [fantasyTeamPlayers, setFantasyTeamPlayers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cookies] = useCookies(["token", "isLoggedIn"]);

  const handleOpenModal = (position, e) => {
    setShowModal(true);
    setPosition(position);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const fetchPlayers = useCallback(async () => {
    const myFantasyTeamUrl = `http://localhost:8080/fantasyTeams`;
    try {
      const data = await getData(myFantasyTeamUrl, cookies.token);
      const playersUrl = `http://localhost:8080/fantasyTeams/${data.fantasyTeam._id}/fantasyTeamPlayers?matchdayId=620ebe9fa8b23e24b6231b96`;
      const players = await getData(playersUrl, cookies.token);
      setFantasyTeamPlayers(players);
      setIsLoading(false);
      console.log(players);
    } catch (err) {
      console.log(err);
    }
  }, [getData, cookies.token]);

  const playersByPosition = (position) => {
    return fantasyTeamPlayers.filter(
      (ftsyPlayer) =>
        ftsyPlayer.player.position === position && ftsyPlayer.isStarter
    );
  };

  const subPlayers = () => {
    return fantasyTeamPlayers.filter((ftsyPlayer) => !ftsyPlayer.isStarter);
  };

  const checkIfTeamContains = (number, position) => {
    return (
      fantasyTeamPlayers.filter(
        (ftsyPlayer) => ftsyPlayer.player.position === position
      ).length === number
    );
  };

  useEffect(() => {
    fetchPlayers();
  }, [fetchPlayers]);

  return (
    <>
      <div className="p-8 grid grid-cols-8 gap-4">
        <AddPlayerModal
          showModal={showModal}
          position={position}
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
        />
        <div className="col-span-8 text-white">
          <h1>My Fantasy Team</h1>
        </div>
        {!isLoading && (
          <>
            <div className="flex flex-row col-span-2">
              <div className="my-auto">
                <div className="p-3">
                  <h1 className="mb-2 text-white">Nombre de equipo</h1>
                  <span className="text-gray-400">
                    {props.fantasyTeam.name}
                  </span>
                </div>
                <div className="p-3">
                  <h1 className="mb-2 text-white">Formación</h1>
                  <select className="w-full" name="formation" id="formation">
                    <option value="4-4-2" selected>
                      4-4-2
                    </option>
                  </select>
                </div>
                <div className="p-3">
                  <h1 className="mb-2 text-white">Presupuesto Disponible</h1>
                  <div className="flex justify-center">
                    <BsFillCheckCircleFill className="m-1 text-green-700" />
                    <span className="text-gray-400">1.000.000/1.000.000</span>
                  </div>
                </div>
                <div className="p-3">
                  <h1 className="mb-2 text-white">El equipo tiene:</h1>
                  <div className="flex justify-start">
                    {checkIfTeamContains(2, "Portero") ? (
                      <BsFillCheckCircleFill className="m-1 text-green-700" />
                    ) : (
                      <BsXCircleFill className="m-1 text-red-700" />
                    )}
                    <span className="text-gray-400">2 arqueros</span>
                  </div>
                  <div className="flex justify-start">
                    {checkIfTeamContains(5, "Defensa") ? (
                      <BsFillCheckCircleFill className="m-1 text-green-700" />
                    ) : (
                      <BsXCircleFill className="m-1 text-red-700" />
                    )}
                    <span className="text-gray-400">5 defensas</span>
                  </div>
                  <div className="flex justify-start">
                    {checkIfTeamContains(5, "Mediocampista") ? (
                      <BsFillCheckCircleFill className="m-1 text-green-700" />
                    ) : (
                      <BsXCircleFill className="m-1 text-red-700" />
                    )}
                    <span className="text-gray-400">5 mediocampistas</span>
                  </div>
                  <div className="flex justify-start">
                    {checkIfTeamContains(4, "Delantero") ? (
                      <BsFillCheckCircleFill className="m-1 text-green-700" />
                    ) : (
                      <BsXCircleFill className="m-1 text-red-700" />
                    )}
                    <span className="text-gray-400">4 delanteros</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <FantasyTeamLineup
                playersByPosition={playersByPosition}
                handleOpenModal={handleOpenModal}
                subPlayers={subPlayers}
              />
            </div>
            <div className="col-span-2"></div>
          </>
        )}
      </div>
    </>
  );
}

export default FantasyTeamDetail;
