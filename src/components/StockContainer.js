import React from "react";
import Stock from "./Stock";

function StockContainer( { stocks, onHandleBuy }) {

  const stocksElement = stocks.map(stock => {
    return <Stock key={stock.id} ticker={stock.ticker} name={stock.name} 
    type={stock.type} price={stock.price} onHandleBuy={onHandleBuy}/>
  })

  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
      {stocksElement}
    </div>
  );
}

export default StockContainer;
