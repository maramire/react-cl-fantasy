import { useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useServices } from "../../hooks/use-services";

import FantasyTeamLineup from "./FantasyTeamLineup";
import FantasyTeamInfo from "./FantasyTeamInfo";
import AddPlayerModal from "../Modal/AddPlayerModal";

function FantasyTeamDetail(props) {
  const [cookies] = useCookies(["token", "isLoggedIn"]);
  const { getMyFantasyTeamPlayers } = useServices();
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [position, setPosition] = useState("");
  const [fantasyTeamPlayers, setFantasyTeamPlayers] = useState(null);
  const [selectedFormation, setSelectedFormation] = useState("4-4-2");

  const fetchPlayers = useCallback(async () => {
    try {
      const fantasyTeamId = props.fantasyTeam._id;
      const matchday = "620ebe9fa8b23e24b6231b96";
      const players = await getMyFantasyTeamPlayers(
        fantasyTeamId,
        matchday,
        cookies
      );
      setFantasyTeamPlayers(players);
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
      fantasyTeamPlayers.filter(
        (ftsyPlayer) => ftsyPlayer.player.position === position
      ).length === number
    );
  };

  const handleOpenModal = (position, e) => {
    setShowModal(true);
    setPosition(position);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
              <FantasyTeamInfo
                fantasyTeam={props.fantasyTeam}
                selectedFormation={selectedFormation}
                setSelectedFormation={selectedFormation}
                checkIfTeamContains={checkIfTeamContains}
              />
            </div>
            <div className="col-span-4">
              <FantasyTeamLineup
                fantasyTeamPlayers={fantasyTeamPlayers}
                setFantasyTeamPlayers={setFantasyTeamPlayers}
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
