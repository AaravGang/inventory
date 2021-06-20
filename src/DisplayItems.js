export default function DisplayItems(props) {
  const showItem = (item) => (
    <tr>
      {Object.entries(item).map((e) => {
        // console.log(e)
        return <td>{e[1]}</td>;
      })}
    </tr>
  );

  return (
    <div className="container">
      <div className="row text-center">
        <h2>Items</h2>
      </div>
      <div className="row">
        <table className=" text-center table table-primary table-bordered table-striped p-3">
          <thead className="thead-light">
            {props.items.length > 0 ? (
              <tr>
                {Object.keys(props.items[0]).map((key) => (
                  <th scope="col">{key.toUpperCase()}</th>
                ))}
              </tr>
            ) : (
              <tr>
                <th className="text-center bg-warning border text-danger">
                  No Items Satisfying Search Requirements
                </th>
              </tr>
            )}
          </thead>
          <tbody>{props.items.map(showItem)}</tbody>
        </table>
      </div>
    </div>
  );
}
