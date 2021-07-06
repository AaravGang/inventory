export default function filterData(filters, data) {
  let filteredData = [];
  let reqFilters = Object.entries(filters).filter((arr) => arr[1]);

  for (let item of data) {
    let filtersSatisfied = reqFilters
      .map(([key, value]) => {
        return item[key] === value;
      })
      .includes(false)
      ? false
      : true;
    if (filtersSatisfied) {
      filteredData.push(item);
    }
  }
  return filteredData;
}
