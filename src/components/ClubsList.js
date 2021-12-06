import ClubCard from "./ClubCard";
function ClubsList(props) {
  return (
    <>
      <div id="container" className="w-4/5 mx-auto">
        <div className="flex flex-wrap flex-col sm:flex-row">
          {props.clubs.map((element) => (
            <ClubCard key={element._id} club={element} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ClubsList;
