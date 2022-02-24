import { useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import { useServices } from "../hooks/use-services";

import FantasyTeamDetail from "../components/FantasyTeam/FantasyTeamDetail";

function MyFantasyTeam() {
  const [cookies] = useCookies(["token", "isLoggedIn"]);
  const { getMyFantasyTeam } = useServices();
  const [fantasyTeam, setFantasyTeam] = useState(null);
  const [hasFantasyTeam, setHasFantasyTeam] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const init = useCallback(async () => {
    try {
      const fantasyTeam = await getMyFantasyTeam(cookies);
      if (fantasyTeam) {
        setHasFantasyTeam(true);
        setFantasyTeam(fantasyTeam);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [cookies, getMyFantasyTeam]);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div className="flex flex-col w-full">
          {!hasFantasyTeam && <Navigate to="new" />}
          {hasFantasyTeam && <FantasyTeamDetail fantasyTeam={fantasyTeam} />}
        </div>
      )}
    </>
  );
}

export default MyFantasyTeam;
