import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import FantasyTeamDetail from "../components/FantasyTeam/FantasyTeamDetail";
import useFetch from "../hooks/use-fetch";

function MyFantasyTeam() {
  const { getData } = useFetch();
  const [fantasyTeam, setFantasyTeam] = useState(null);
  const [cookies] = useCookies(["token", "isLoggedIn"]);
  const [hasFantasyTeam, setHasFantasyTeam] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function init() {
      const data = await getData(
        "http://localhost:8080/fantasyTeams",
        cookies.token
      );
      console.log(data);
      if (data.fantasyTeam) {
        setHasFantasyTeam(true);
        setFantasyTeam(data.fantasyTeam);
      }
      setIsLoading(false);
    }

    init();
  }, [getData, cookies.token]);
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
