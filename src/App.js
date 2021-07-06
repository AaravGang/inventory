import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import AddItem from "./AddItem";
import DisplayItems from "./DisplayItems";
import filterData from "./FilterData";
import AlertDismissible from "./Alerts";

function App() {
  const dbUrl = "https://json-server-data-base.herokuapp.com/items";
  const [filters, setFilters] = useState({});
  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const [data, setData] = useState({ items: [] });
  const [alertParams, setAlertParams] = useState({
    text: "",
    show: false,
    bgColor: "",
  });

  useEffect(() => {
    fetch(dbUrl)
      .then((response) => response.json())
      .then((data) => {
        setData({ items: data });
      });
  }, []);

  const addItem = (item) => {
    let items = data.items;
    let requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    };

    fetch(dbUrl, requestOptions)
      .then((response) => response.json())
      .then((item) => {
        items.push(item);
        setData({ items: items });
        setAlertParams({
          text: "Successfully Added!",
          show: true,
          bgColor: "success",
        });
      })
      .catch(() => {
        setAlertParams({
          text: "There was an error while trying to add item!",
          show: true,
          bgColor: "danger",
        });
      });
  };

  const updateItem = ([item, updatedItem]) => {
    let items = data.items;
    let index = items.indexOf(item);
    console.log(index);
    let requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedItem),
    };

    fetch(`${dbUrl}/${item.id}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          items[index] = updatedItem;
          setData({ items: items });
          setAlertParams({
            text: "Update Successful!",
            show: true,
            bgColor: "info",
          });
        } else {
          setAlertParams({
            text: "Could not update item... Please try again!",
            show: true,
            bgColor: "warning",
          });
        }
      })
      .catch(() => {
        setAlertParams({
          text: "There was an error while trying to update item!",
          show: true,
          bgColor: "danger",
        });
      });
  };

  const deleteItem = (item) => {
    let requestOptions = {
      method: "DELETE",
    };
    fetch(`${dbUrl}/${item.id}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          let items = data.items;
          items.splice(items.indexOf(item), 1);
          setData({ items: items });
          setAlertParams({
            text: "Successfully Deleted Item!",
            show: true,
            bgColor: "primary",
          });
        } else {
          setAlertParams({
            text: "Unable to delete item... Please try again!",
            show: true,
            bgColor: "warning",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setAlertParams({
          text: "There was an error while trying to delete item!",
          show: true,
          bgColor: "danger",
        });
      });
  };

  return (
    <div className="container text-center">
      <div className="mt-5 row">
        <SearchBar updateFilters={updateFilters} />
      </div>
      <div className="mt-5 row">
        <DisplayItems
          updateItem={updateItem}
          deleteItem={deleteItem}
          items={filterData(filters, data.items)}
        />
      </div>
      <div className="mt-5 row">
        <AddItem addItem={addItem} />
      </div>
      {alertParams.show ? (
        <AlertDismissible
          text={alertParams.text}
          show={alertParams.show}
          variant={alertParams.bgColor}
          setParams={setAlertParams}
        />
      ) : null}
    </div>
  );
}

export default App;
