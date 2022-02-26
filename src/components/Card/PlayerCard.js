import { useState } from "react";
import { FaTshirt } from "react-icons/fa";
import AddPlayerModal from "../Modal/AddPlayerModal";

function PlayerCard(props) {
  const [showModal, setShowModal] = useState(false);
  const [modalPlayerPosition, setModalPlayerPosition] = useState("");

  const onDragStart = (e) => {
    const fantasyPlayerId = e.target.id;
    e.dataTransfer.setData("player_id", fantasyPlayerId);
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

  const getLastName = (name) => {
    const nameArray = name.split(" ");
    const newNameArray = nameArray.map((el, id) => {
      if (id === nameArray.length - 1) return el;
      return el[0];
    });
    return newNameArray.join(". ");
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
      <AddPlayerModal
        showModal={showModal}
        position={modalPlayerPosition}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
      />
      {!props.isSelected && (
        <button
          className="text-black p-2 w-full rounded"
          onClick={(e) => handleOpenModal(props.position, e)}
        >
          <div className="self-center">+</div>
        </button>
      )}
      {props.isSelected && (
        <button
          title={props.fantasyPlayer.player.name}
          position={props.position}
          id={props.fantasyPlayer._id}
          draggable={props.draggable}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          {...(props.hasOnDrag && { onDrop, onDragOver })}
          onClick={(e) => handleOpenModal(props.position, e)}
          className={
            props.hasOnDrag
              ? "flex flex-col  max-w-20 max-h-30 rounded outline outline-offset-2 outline-cyan-800 hover:bg-gray-300"
              : "flex flex-col  max-w-20 max-h-30 rounded hover:bg-gray-300"
          }
        >
          <div className="flex h-30 w-20 p-3">
            {props.fantasyPlayer.player.position === "Portero" ? (
              <FaTshirt className="my-0 mx-auto text-yellow-400" />
            ) : (
              <FaTshirt className="my-0 mx-auto text-fuchsia-800" />
            )}
          </div>
          <div className="w-20 inline-block p-1 bg-gray-300 rounded overflow-hidden text-center truncate text-xs">
            {getLastName(props.fantasyPlayer.player.name)}
          </div>
        </button>
      )}
    </>
  );
}

export default PlayerCard;
