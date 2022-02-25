import { useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useServices } from "../../hooks/use-services";

import FantasyTeamLineup from "./FantasyTeamLineup";
import FantasyTeamInfo from "./FantasyTeamInfo";
import AddPlayerModal from "../Modal/AddPlayerModal";

const matchday = "620ebe9fa8b23e24b6231b96";

function FantasyTeamDetail(props) {
  const [cookies] = useCookies(["token", "isLoggedIn"]);
  const { getMyFantasyTeamPlayers } = useServices();
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [modalPlayerPosition, setModalPlayerPosition] = useState("");
  const [players, setPlayers] = useState(null);
  const [formation, setFormation] = useState("4-4-2");

  const fetchPlayers = useCallback(async () => {
    try {
      const fantasyTeamId = props.fantasyTeam._id;
      const players = await getMyFantasyTeamPlayers(
        fantasyTeamId,
        matchday,
        cookies
      );
      setPlayers(players);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [getMyFantasyTeamPlayers, cookies, props.fantasyTeam._id]);

  useEffect(() => {
    fetchPlayers();
  }, [fetchPlayers]);

  const checkIfTeamContains = (number, position) => {
    return (
      players.filter((ftsyPlayer) => ftsyPlayer.player.position === position)
        .length === number
    );
  };

  const handleOpenModal = (position, e) => {
    setShowModal(true);
    setModalPlayerPosition(position);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="p-8 grid grid-cols-8 gap-4">
        <AddPlayerModal
          showModal={showModal}
          position={modalPlayerPosition}
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
        />
        <div className="col-span-8 text-white">
          <h1>My Fantasy Team</h1>
        </div>
        {!isLoading && (
          <>
            <div className="flex flex-row col-span-2">
              <FantasyTeamInfo
                fantasyTeam={props.fantasyTeam}
                formation={formation}
                setFormation={formation}
                checkIfTeamContains={checkIfTeamContains}
              />
            </div>
            <div className="col-span-4">
              <FantasyTeamLineup
                players={players}
                formation={formation}
                setPlayers={setPlayers}
                handleOpenModal={handleOpenModal}
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
