import "./App.css";
import { useState } from "react";
import SearchBar from "./SearchBar";
import AddItem from "./AddItem";
import DisplayItems from "./DisplayItems";
import filterData from "./FilterData";

export default function App() {
  const [filters, setFilters] = useState({});
  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const [data, setData] = useState({ items: [] });
  const addItem = (item) => {
    let items = data.items;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    };

    fetch("http://localhost:3000/items", requestOptions)
      .then((response) => response.json())
      .then((item) => {
        items.push(item);
        setData({ items: items });
      });
  };

  return (
    <div className="container">
      <div className="mt-5 row">
        <SearchBar updateFilters={updateFilters} />
      </div>
      <div className="mt-5 row">
        <DisplayItems items={filterData(filters, data.items)} />
      </div>
      <div className="mt-5 row">
        <AddItem addItem={addItem} />
      </div>
    </div>
  );
}
