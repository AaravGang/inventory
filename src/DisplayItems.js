import UpdateItem from "./UpdateItem";

export default function DisplayItems(props) {
  const showItem = (item) => (
    <tr key={item.id}>
      {Object.entries(item).map((e) => {
        return <td key={`${item}-${e[0]}`}>{e[1]}</td>;
      })}
      <td>
        <UpdateItem item={item} updateItem={props.updateItem} />
      </td>

      <td>
        <button
          onClick={() => {
            props.deleteItem(item);
          }}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
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
                  <th key={key} scope="col">
                    {key.toUpperCase()}
                  </th>
                ))}
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
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
