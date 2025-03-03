import React from "react";

function Stock( { ticker, name, type, price, onHandleSell }) {
  return (
    <div>
      <div className="card" onClick={() => onHandleSell(name)}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;