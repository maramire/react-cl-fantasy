import { useState } from "react";
import PlayerCard from "../Card/PlayerCard";

function FantasyTeamLineup(props) {
  const [isSelected, setIsSelected] = useState(true);
  const [draggedPosition, setDraggedPosition] = useState("");

  const getPlayersByPosition = (position) => {
    return props.fantasyTeamPlayers.filter(
      (ftsyPlayer) =>
        ftsyPlayer.player.position === position && ftsyPlayer.isStarter
    );
  };

  const getSubPlayers = () => {
    return props.fantasyTeamPlayers.filter(
      (ftsyPlayer) => !ftsyPlayer.isStarter
    );
  };

  const changeSubWithStarter = (subPlayerId, starterPlayerId) => {
    let updatedFantasyPlayers = props.fantasyTeamPlayers.map((ftsyPlayer) => {
      if (ftsyPlayer._id === subPlayerId) {
        return { ...ftsyPlayer, isStarter: !ftsyPlayer.isStarter };
      } else if (ftsyPlayer._id === starterPlayerId) {
        return { ...ftsyPlayer, isStarter: !ftsyPlayer.isStarter };
      }
      return ftsyPlayer;
    });
    props.setFantasyTeamPlayers(updatedFantasyPlayers);
  };

  const checkIfPlayersCanBeChanged = (ftsyPlayer1Id, ftsyPlayer2Id) => {
    const ftsyPlayer1 = props.fantasyTeamPlayers.find((ftsyPlayer) => {
      return ftsyPlayer._id === ftsyPlayer1Id;
    });
    const ftsyPlayer2 = props.fantasyTeamPlayers.find((ftsyPlayer) => {
      return ftsyPlayer._id === ftsyPlayer2Id;
    });
    return (
      ftsyPlayer1.player.position === ftsyPlayer2.player.position &&
      ftsyPlayer1Id !== ftsyPlayer2Id &&
      ftsyPlayer1.isStarter !== ftsyPlayer2.isStarter
    );
  };

  return (
    <div className="grid grid-rows-5 bg-green-500 rounded">
      <div className="grid grid-flow-col auto-cols-max justify-center my-3">
        {getPlayersByPosition("Portero").map((ftsyPlayer) => {
          return (
            <PlayerCard
              key={ftsyPlayer._id}
              changeSubWithStarter={changeSubWithStarter}
              checkIfPlayersCanBeChanged={checkIfPlayersCanBeChanged}
              position="Portero"
              ftsyPlayer={ftsyPlayer}
              handleOpenModal={props.handleOpenModal}
              isSelected={isSelected}
              setDraggedPosition={setDraggedPosition}
              hasOnDrag={"Portero" === draggedPosition}
            />
          );
        })}
      </div>
      <div className="grid grid-flow-col auto-cols-max justify-center gap-x-5 my-3">
        {getPlayersByPosition("Defensa").map((ftsyPlayer) => {
          return (
            <PlayerCard
              key={ftsyPlayer._id}
              changeSubWithStarter={changeSubWithStarter}
              position="Defensa"
              checkIfPlayersCanBeChanged={checkIfPlayersCanBeChanged}
              ftsyPlayer={ftsyPlayer}
              handleOpenModal={props.handleOpenModal}
              setDraggedPosition={setDraggedPosition}
              isSelected={isSelected}
              hasOnDrag={"Defensa" === draggedPosition}
            />
          );
        })}
      </div>
      <div className="grid grid-flow-col auto-cols-max justify-center gap-x-5 my-3">
        {getPlayersByPosition("Mediocampista").map((ftsyPlayer) => {
          return (
            <PlayerCard
              key={ftsyPlayer._id}
              changeSubWithStarter={changeSubWithStarter}
              position="Mediocampista"
              checkIfPlayersCanBeChanged={checkIfPlayersCanBeChanged}
              ftsyPlayer={ftsyPlayer}
              handleOpenModal={props.handleOpenModal}
              setDraggedPosition={setDraggedPosition}
              isSelected={isSelected}
              hasOnDrag={"Mediocampista" === draggedPosition}
            />
          );
        })}
      </div>
      <div className="grid grid-flow-col auto-cols-max justify-center gap-x-5 my-4">
        {getPlayersByPosition("Delantero").map((ftsyPlayer) => {
          return (
            <PlayerCard
              key={ftsyPlayer._id}
              changeSubWithStarter={changeSubWithStarter}
              checkIfPlayersCanBeChanged={checkIfPlayersCanBeChanged}
              position="Delantero"
              ftsyPlayer={ftsyPlayer}
              handleOpenModal={props.handleOpenModal}
              setDraggedPosition={setDraggedPosition}
              isSelected={isSelected}
              hasOnDrag={"Delantero" === draggedPosition}
            />
          );
        })}
      </div>
      <div className="grid grid-flow-col auto-cols-max justify-center gap-x-5 my-4">
        {getSubPlayers().map((ftsyPlayer) => {
          return (
            <PlayerCard
              key={ftsyPlayer._id}
              changeSubWithStarter={changeSubWithStarter}
              position={ftsyPlayer.player.position}
              checkIfPlayersCanBeChanged={checkIfPlayersCanBeChanged}
              draggable="true"
              ftsyPlayer={ftsyPlayer}
              handleOpenModal={props.handleOpenModal}
              setDraggedPosition={setDraggedPosition}
              isSelected={isSelected}
              hasOnDrag={false}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FantasyTeamLineup;
