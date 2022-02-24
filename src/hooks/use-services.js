import { useCallback } from "react";
import { useFetch } from "./use-fetch";

const useServices = () => {
  const { getDataFromServer, postDataToServer } = useFetch();

  const login = async (userPayload) => {
    const path = "/login";
    return await postDataToServer(path, null, userPayload);
  };

  const createFantasyTeam = async (name, cookies) => {
    const path = "/fantasyTeams";
    return await postDataToServer(path, cookies.token, { name });
  };

  const getMyFantasyTeam = useCallback(
    async (cookies) => {
      const path = "/fantasyTeams";
      return await getDataFromServer(path, cookies.token);
    },
    [getDataFromServer]
  );

  const getPlayersByPosition = useCallback(
    async (position) => {
      const path = `/players?position=${position}`;
      return await getDataFromServer(path, null);
    },
    [getDataFromServer]
  );

  const getMyFantasyTeamPlayers = useCallback(
    async (fantasyTeamId, matchdayId, cookies) => {
      const path = `/fantasyTeams/${fantasyTeamId}/fantasyTeamPlayers?matchdayId=${matchdayId}`;
      return await getDataFromServer(path, cookies.token);
    },
    [getDataFromServer]
  );

  return {
    login,
    createFantasyTeam,
    getMyFantasyTeam,
    getPlayersByPosition,
    getMyFantasyTeamPlayers,
  };
};

export { useServices };
