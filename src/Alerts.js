import Alert from "react-bootstrap/Alert";
export default function AlertDismissible(props) {
  return (
    <Alert show={props.show} variant={props.variant} className="fixed-top row">
      <strong className="col">{props.text}</strong>
      <button
        className={`col-1 close btn btn-outline-${props.variant} mr-3`}
        type="button"
        aria-label="Close"
        onClick={() =>
          props.setParams({
            text: "",
            show: false,
            bgColor: "",
          })
        }
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </Alert>
  );
}
