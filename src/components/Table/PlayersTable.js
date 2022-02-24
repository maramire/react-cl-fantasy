function PlayersTable(props) {
  return (
    <table className="min-w-full">
      <thead>
        <tr>
          {props.columns.map((column, id) => {
            return <th key={id}>{column}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {props.data.map((player) => {
          return (
            <tr
              key={player._id}
              onClick={props.handleRowSelect.bind(this, player)}
              className="cursor-pointer hover:bg-slate-700 dark:hover:bg-gray-700"
            >
              <td>
                <input
                  value={player._id}
                  name="player"
                  onChange={props.handleRadioChange}
                  checked={props.selectedPlayer === player._id}
                  type="radio"
                />
              </td>
              <td>{player.name}</td>
              <td>{player.club.name}</td>
              <td>0</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default PlayersTable;
