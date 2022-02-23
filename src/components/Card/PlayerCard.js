import { FaTshirt } from "react-icons/fa";

function PlayerCard(props) {
  return (
    <>
      {!props.isSelected && (
        <button
          onClick={(e) => props.handleOpenModal(props.position, e)}
          className="flex justify-center text-black h-20 w-20 bg-indigo-700 hover:bg-indigo-500 p-2 rounded-lg"
        >
          <div className="self-center">+</div>
        </button>
      )}
      {props.isSelected && (
        <button
          onClick={(e) => props.handleOpenModal(props.position, e)}
          className="flex flex-col justify-center bg-sky-900 text-black h-20 hover:bg-sky-700 w-20 border rounded-lg"
        >
          <div className="h-3/6 p-2">
            <FaTshirt className="w-full h-full text-white" />
          </div>
          <div className="h-3/6 px-1">
            <p className="text-xs text-clip text-white">
              {props.ftsyPlayer.player.name}
            </p>
          </div>
        </button>
      )}
    </>
  );
}

export default PlayerCard;
