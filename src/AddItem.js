import { useState } from "react";
//test

function AddItem(props) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0);
  const id = null;
  const handleAddItemButtonClicked = () => {
    props.addItem({ id, name, type, brand, price });
    setName("");
    setType("");
    setBrand("");
    setPrice(0);
  };

  return (
    <div className="container">
      <div className="row text-center">
        <h1>Add Items</h1>
      </div>

      <form>
        <div className="form-group row mt-4">
          <label htmlFor="add-name-field" className="col-2">
            <strong>Name</strong>
          </label>
          <div className="col-8">
            <input
              className="form-control"
              type="text"
              id="add-name-field"
              value={name}
              placeholder="Ex: Shirt"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row mt-4">
          <label htmlFor="add-type-field" className="col-2">
            <strong>Type</strong>
          </label>
          <div className="col-8">
            <input
              className="form-control"
              type="text"
              id="add-type-field"
              value={type}
              placeholder="Ex: Cotton"
              onChange={(e) => setType(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group row mt-4">
          <label htmlFor="add-brand-field" className="col-2">
            <strong>Brand</strong>
          </label>
          <div className="col-8">
            <input
              className="form-control"
              type="text"
              id="add-brand-field"
              value={brand}
              placeholder="Ex: Nike"
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row mt-4">
          <label htmlFor="add-price-field" className="col-2">
            <strong>Price</strong>
          </label>
          <div className="col-8">
            <input
              className="form-control"
              type="number"
              id="add-price-field"
              value={price}
              placeholder="Ex: $50"
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

      <div className="row mt-3">
        <div className="text-center">
          <button
            type="button"
            className="col-5 btn btn-outline-secondary border-3"
            onClick={handleAddItemButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
