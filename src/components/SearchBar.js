import React from "react";

function SearchBar( { alphabetically, onHandleAlphabetically, 
  price, onHandlePrice, filter, onHandleFilter }) {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={alphabetically}
          onChange={e => onHandleAlphabetically(e.target.checked)}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={price}
          onChange={e => onHandlePrice(e.target.checked)}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={e => onHandleFilter(e.target.value)} value={filter} >
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
