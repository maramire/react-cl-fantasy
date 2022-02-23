import PlayerCard from "../Card/PlayerCard";

function FantasyTeamLineup(props) {
  return (
    <div className="grid grid-rows-5 bg-green-500 rounded">
      <div className="grid grid-flow-col auto-cols-max justify-center my-3">
        {props.playersByPosition("Portero").map((ftsyPlayer) => {
          return (
            <PlayerCard
              position="Portero"
              ftsyPlayer={ftsyPlayer}
              handleOpenModal={props.handleOpenModal}
              isSelected={true}
            />
          );
        })}
      </div>
      <div className="grid grid-flow-col auto-cols-max justify-center gap-x-5 my-3">
        {props.playersByPosition("Defensa").map((ftsyPlayer) => {
          return (
            <PlayerCard
              position="Defensa"
              ftsyPlayer={ftsyPlayer}
              handleOpenModal={props.handleOpenModal}
              isSelected={true}
            />
          );
        })}
      </div>
      <div className="grid grid-flow-col auto-cols-max justify-center gap-x-5 my-3">
        {props.playersByPosition("Mediocampista").map((ftsyPlayer) => {
          return (
            <PlayerCard
              position="Mediocampista"
              ftsyPlayer={ftsyPlayer}
              handleOpenModal={props.handleOpenModal}
              isSelected={true}
            />
          );
        })}
      </div>
      <div className="grid grid-flow-col auto-cols-max justify-center gap-x-5 my-4">
        {props.playersByPosition("Delantero").map((ftsyPlayer) => {
          return (
            <PlayerCard
              position="Delantero"
              ftsyPlayer={ftsyPlayer}
              handleOpenModal={props.handleOpenModal}
              isSelected={true}
            />
          );
        })}
      </div>
      <div className="grid grid-flow-col auto-cols-max justify-center gap-x-5 my-4">
        {props.subPlayers().map((ftsyPlayer) => {
          return (
            <PlayerCard
              position={ftsyPlayer.player.position}
              ftsyPlayer={ftsyPlayer}
              handleOpenModal={props.handleOpenModal}
              isSelected={true}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FantasyTeamLineup;
