import { useState } from "react";

function SearchBar(props) {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0);

  const handleSearchButtonClicked = () => {
    props.updateFilters({ id, name, type, brand, price });
  };

  return (
    <div className="container">
      <div className="row text-center">
        <h1>Search Items</h1>
      </div>

      <div className="row mt-4">
        <div className="col">
          <label htmlFor="search-id-field">
            <strong>ID</strong>
          </label>

          <input
            className="form-control"
            type="number"
            id="search-id-field"
            placeholder="Item Id"
            onChange={(e) => setId(parseInt(e.target.value))}
          />
        </div>
        <div className="col">
          <label htmlFor="search-name-field">
            <strong>Name</strong>
          </label>

          <input
            className="form-control"
            type="text"
            id="search-name-field"
            // value={name}
            placeholder="Item Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="col">
          <label htmlFor="search-type-field">
            <strong>Type</strong>
          </label>

          <input
            placeholder="Type of item"
            className="form-control"
            type="text"
            id="search-type-field"
            // value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>

        <div className="col">
          <label htmlFor="search-brand-field">
            <strong>Brand</strong>
          </label>

          <input
            placeholder="Brand Name"
            className="form-control"
            type="text"
            id="search-brand-field"
            // value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>

        <div className="col">
          <label htmlFor="search-price-field">
            <strong>Price</strong>
          </label>

          <input
            className="form-control"
            type="number"
            placeholder="Price"
            id="search-price-field"
            // value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
          />
        </div>
      </div>
      <div className="row">
        <div className="mt-3 text-center">
          <button
            className="col-4 btn btn-outline-primary border-4"
            type="button"
            onClick={() => {
              handleSearchButtonClicked();
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
