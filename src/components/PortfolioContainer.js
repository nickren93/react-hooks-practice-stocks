import React from "react";
import MyStock from "./MyStock";

function PortfolioContainer( { myStocks, onHandleSell } ) {
  const myStocksElement = myStocks.map(myStock => {
    return <MyStock key={myStock.id} ticker={myStock.ticker} name={myStock.name} 
    type={myStock.type} price={myStock.price} onHandleSell={onHandleSell}/>
  })

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        //render your portfolio stocks here
      }
      {myStocksElement}
    </div>
  );
}

export default PortfolioContainer;
