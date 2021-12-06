import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClubsList from "../components/ClubsList";
function Clubs() {
  const [clubs, setClubs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/clubs?leagueId=5250792")
      .then((response) => response.json())
      .then((data) => setClubs(data));
  }, []);
  return (
    <div>
      <div className="p-5">
        <Link to="/home">Home</Link>
        {" > "}
        <Link to="/clubs">Clubs</Link>
      </div>
      <div className="p-5">Lista de clubes</div>
      <ClubsList clubs={clubs}></ClubsList>
    </div>
  );
}

export default Clubs;
