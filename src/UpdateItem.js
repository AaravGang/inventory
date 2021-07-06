import Modal from "react-bootstrap/Modal";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function UpdateItem(props) {
  const item = props.item;
  const [name, setName] = useState(item.name);
  const [type, setType] = useState(item.type);
  const [brand, setBrand] = useState(item.brand);
  const [price, setPrice] = useState(item.price);
  const id = item.id;

  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const handleSaveButtonClicked = () => {
    let updatedItem = { id, name, type, brand, price };
    props.updateItem([item, updatedItem]);
    hideModal();
  };

  const handleCloseButtonClicked = () => {
    setName(item.name);
    setType(item.type);
    setBrand(item.brand);
    setPrice(item.price);
    hideModal();
  };

  return (
    <div className="text-center">
      <button type="button" className="btn btn-info" onClick={showModal}>
        Update
      </button>

      <Modal className="modal-dark" show={show} onHide={hideModal} centered>
        <Modal.Header>
          <Modal.Title>Update Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group row mt-4">
              <label htmlFor="update-name-field" className="col-2">
                <strong>Name</strong>
              </label>
              <div className="col-8">
                <input
                  className="form-control clear"
                  type="text"
                  id="update-name-field"
                  placeholder="Ex: Shirt"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group row mt-4">
              <label htmlFor="update-type-field" className="col-2">
                <strong>Type</strong>
              </label>
              <div className="col-8">
                <input
                  className="form-control clear"
                  type="text"
                  id="update-type-field"
                  placeholder="Ex: Cotton"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group row mt-4">
              <label htmlFor="update-brand-field" className="col-2">
                <strong>Brand</strong>
              </label>
              <div className="col-8">
                <input
                  className="form-control clear"
                  type="text"
                  id="update-brand-field"
                  placeholder="Ex: Nike"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group row mt-4">
              <label htmlFor="update-price-field" className="col-2">
                <strong>Price</strong>
              </label>
              <div className="col-8">
                <input
                  className="form-control clear"
                  type="number"
                  id="update-price-field"
                  placeholder="Ex: $50"
                  value={price}
                  onChange={(e) =>
                    setPrice(
                      isNaN(parseInt(e.target.value))
                        ? ""
                        : parseInt(e.target.value)
                    )
                  }
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={handleCloseButtonClicked}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleSaveButtonClicked}>
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
