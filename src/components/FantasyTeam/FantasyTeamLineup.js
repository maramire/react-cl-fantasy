import { useState } from "react";
import PlayerCard from "../Card/PlayerCard";

function FantasyTeamLineup(props) {
  const [isSelected] = useState(true);
  const [draggedPosition, setDraggedPosition] = useState("");

  const getPlayersByPosition = (position) => {
    return props.players.filter(
      (fantasyPlayer) =>
        fantasyPlayer.player.position === position && fantasyPlayer.isStarter
    );
  };

  const getSubPlayers = () => {
    return props.players.filter((fantasyPlayer) => !fantasyPlayer.isStarter);
  };

  const changeSubWithStarter = (subPlayerId, starterPlayerId) => {
    let updatedFantasyPlayers = props.players.map((fantasyPlayer) => {
      if (fantasyPlayer._id === subPlayerId) {
        return { ...fantasyPlayer, isStarter: !fantasyPlayer.isStarter };
      } else if (fantasyPlayer._id === starterPlayerId) {
        return { ...fantasyPlayer, isStarter: !fantasyPlayer.isStarter };
      }
      return fantasyPlayer;
    });
    props.setPlayers(updatedFantasyPlayers);
  };

  const checkIfPlayersCanBeChanged = (fantasyPlayer1Id, fantasyPlayer2Id) => {
    const fantasyPlayer1 = props.players.find((fantasyPlayer) => {
      return fantasyPlayer._id === fantasyPlayer1Id;
    });
    const fantasyPlayer2 = props.players.find((fantasyPlayer) => {
      return fantasyPlayer._id === fantasyPlayer2Id;
    });
    return (
      fantasyPlayer1.player.position === fantasyPlayer2.player.position &&
      fantasyPlayer1Id !== fantasyPlayer2Id &&
      fantasyPlayer1.isStarter !== fantasyPlayer2.isStarter
    );
  };

  return (
    <>
      <div className="h-[28rem] w-[28rem] flex flex-col bg-football-pitch bg-no-repeat bg-contain bg-top self-center gap-y-4">
        <div className="flex flex-row justify-center gap-x-1 mt-5">
          {getPlayersByPosition("Portero").map((fantasyPlayer) => {
            return (
              <PlayerCard
                key={fantasyPlayer._id}
                changeSubWithStarter={changeSubWithStarter}
                checkIfPlayersCanBeChanged={checkIfPlayersCanBeChanged}
                position="Portero"
                fantasyPlayer={fantasyPlayer}
                isSelected={isSelected}
                setDraggedPosition={setDraggedPosition}
                hasOnDrag={"Portero" === draggedPosition}
              />
            );
          })}
        </div>
        <div className="flex flex-row justify-center gap-x-1">
          {getPlayersByPosition("Defensa").map((fantasyPlayer) => {
            return (
              <PlayerCard
                key={fantasyPlayer._id}
                changeSubWithStarter={changeSubWithStarter}
                position="Defensa"
                checkIfPlayersCanBeChanged={checkIfPlayersCanBeChanged}
                fantasyPlayer={fantasyPlayer}
                setDraggedPosition={setDraggedPosition}
                isSelected={isSelected}
                hasOnDrag={"Defensa" === draggedPosition}
              />
            );
          })}
        </div>
        <div className="flex flex-row justify-center gap-x-1">
          {getPlayersByPosition("Mediocampista").map((fantasyPlayer) => {
            return (
              <PlayerCard
                key={fantasyPlayer._id}
                changeSubWithStarter={changeSubWithStarter}
                position="Mediocampista"
                checkIfPlayersCanBeChanged={checkIfPlayersCanBeChanged}
                fantasyPlayer={fantasyPlayer}
                setDraggedPosition={setDraggedPosition}
                isSelected={isSelected}
                hasOnDrag={"Mediocampista" === draggedPosition}
              />
            );
          })}
        </div>
        <div className="flex flex-row justify-center gap-x-1">
          {getPlayersByPosition("Delantero").map((fantasyPlayer) => {
            return (
              <PlayerCard
                key={fantasyPlayer._id}
                changeSubWithStarter={changeSubWithStarter}
                checkIfPlayersCanBeChanged={checkIfPlayersCanBeChanged}
                position="Delantero"
                fantasyPlayer={fantasyPlayer}
                setDraggedPosition={setDraggedPosition}
                isSelected={isSelected}
                hasOnDrag={"Delantero" === draggedPosition}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center self-center  gap-x-1 gap-y-1">
        {getSubPlayers().map((fantasyPlayer) => {
          return (
            <PlayerCard
              key={fantasyPlayer._id}
              changeSubWithStarter={changeSubWithStarter}
              position={fantasyPlayer.player.position}
              checkIfPlayersCanBeChanged={checkIfPlayersCanBeChanged}
              draggable="true"
              fantasyPlayer={fantasyPlayer}
              setDraggedPosition={setDraggedPosition}
              isSelected={isSelected}
              hasOnDrag={false}
            />
          );
        })}
      </div>
    </>
  );
}

export default FantasyTeamLineup;
