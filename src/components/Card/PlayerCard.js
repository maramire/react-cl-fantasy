import { useState } from "react";
import { FaTshirt } from "react-icons/fa";

function PlayerCard(props) {
  const onDragStart = (e) => {
    const ftsyPlayerId = e.target.id;
    e.dataTransfer.setData("player_id", ftsyPlayerId);
    setTimeout(() => {
      props.setDraggedPosition(props.position);
    }, 0);
  };

  const onDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const onDragEnd = (e) => {
    props.setDraggedPosition("");
  };

  const onDrop = (e) => {
    e.preventDefault();
    const subPlayerId = e.dataTransfer.getData("player_id");
    const starterPlayerId = e.currentTarget.id;
    if (props.checkIfPlayersCanBeChanged(subPlayerId, starterPlayerId)) {
      props.changeSubWithStarter(subPlayerId, starterPlayerId);
      props.setDraggedPosition("");
      return;
    }
  };

  const truncateName = (name) => {
    const [firstName, ...rest] = name.split(" ");
    return `${firstName[0]}. ${rest.join(" ")}`;
  };

  return (
    <>
      <div className="flex justify-center bg-indigo-700 hover:bg-indigo-500 h-20 w-20 rounded-lg">
        {!props.isSelected && (
          <button
            className="text-black p-2 w-full rounded"
            onClick={(e) => props.handleOpenModal(props.position, e)}
          >
            <div className="self-center">+</div>
          </button>
        )}
        {props.isSelected && (
          <button
            title={props.ftsyPlayer.player.name}
            position={props.position}
            id={props.ftsyPlayer._id}
            draggable={props.draggable}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            {...(props.hasOnDrag && { onDrop, onDragOver })}
            onClick={(e) => props.handleOpenModal(props.position, e)}
            className={
              props.hasOnDrag
                ? "p-1 w-full rounded outline outline-offset-2 outline-cyan-800 "
                : "p-1 w-full rounded"
            }
          >
            <div className="h-3/6 p-2">
              {props.ftsyPlayer.player.position === "Portero" ? (
                <FaTshirt className="w-full h-full text-yellow-300" />
              ) : (
                <FaTshirt className="w-full h-full text-white" />
              )}
            </div>
            <div className="h-3/6">
              <p className="inline-block align-baseline text-xs text-white">
                {truncateName(props.ftsyPlayer.player.name)}
              </p>
            </div>
          </button>
        )}
      </div>
    </>
  );
}

export default PlayerCard;
