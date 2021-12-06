import { Link } from "react-router-dom";
function ClubCard(props) {
  return (
    <div className="sm:w-1/4 p-2">
      <Link to={`${props.club._id}`}>
        <div className="bg-white text-xs p-6 rounded-lg shadow-lg text-center">
          {props.club.name}
        </div>
      </Link>
    </div>
  );
}

export default ClubCard;
