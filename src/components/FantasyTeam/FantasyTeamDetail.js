import { useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useServices } from "../../hooks/use-services";

import FantasyTeamLineup from "./FantasyTeamLineup";
import FantasyTeamInfo from "./FantasyTeamInfo";

const matchday = "620ebe9fa8b23e24b6231b96";

function FantasyTeamDetail(props) {
  const [cookies] = useCookies(["token", "isLoggedIn"]);
  const { getMyFantasyTeamPlayers } = useServices();
  const [isLoading, setIsLoading] = useState(true);
  const [players, setPlayers] = useState(null);
  const [formation] = useState("4-4-2");

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

  return (
    <div className="grid grid-cols-12 min-h-full">
      <div className="col-span-12 text-white mb-5">
        <h1>My Fantasy Team</h1>
      </div>
      {!isLoading && (
        <>
          <div className="flex flex-col col-span-2 min-h-full">
            <FantasyTeamInfo
              fantasyTeam={props.fantasyTeam}
              formation={formation}
              setFormation={formation}
              checkIfTeamContains={checkIfTeamContains}
            />
          </div>
          <div className="flex flex-col col-span-8 min-h-full">
            <FantasyTeamLineup
              players={players}
              formation={formation}
              setPlayers={setPlayers}
            />
          </div>
          <div className="col-span-2"></div>
        </>
      )}
    </div>
  );
}

export default FantasyTeamDetail;
