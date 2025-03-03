import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [originalStocks, setOriginalStocks] = useState([])
  const [stocks, setStocks] = useState([])
  const [myStocks, setMyStocks] = useState([])
  const [alphabetically, setAlphabetically] = useState(false)
  const [price, setPrice] = useState(false)
  const [filter, setFilter] = useState("Tech")

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(resp => resp.json())
    .then(data => {
      setStocks(data)
      setOriginalStocks(data)
    })
  }, [])

  function handleBuy(name){
    if(!(myStocks.find(stock => stock.name == name))){
      const updatedMyStocks = [...myStocks, stocks.find(stock => stock.name == name)]
      setMyStocks(updatedMyStocks)
    }
  }

  function handleSell(name){
    const updatedMyStocks = myStocks.filter(stock => stock.name != name)
    setMyStocks(updatedMyStocks)
  }

  function handleAlphabetically(checked){
    setAlphabetically(checked)
    setPrice(false)
    if (checked) {
      const updatedStocks = [...stocks].sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      })
      setStocks(updatedStocks)
    }else{
      setStocks([...originalStocks])
    }
  }

  function handlePrice(checked){
    setPrice(checked)
    setAlphabetically(false)
    if (checked) {
      const updatedStocks = [...stocks].sort((a, b) => {
        if (a.price < b.price) return -1;
        if (a.price > b.price) return 1;
        return 0;
      })
      setStocks(updatedStocks)
    }else{
      setStocks([...originalStocks])
    }
  }

  function handleFilter(value){
    setFilter(value)
    const updatedStocks = originalStocks.filter(stock => stock.type == value)
    setStocks(updatedStocks)
  }

  return (
    <div>
      <SearchBar 
        alphabetically={alphabetically} onHandleAlphabetically={handleAlphabetically}
        price={price} onHandlePrice={handlePrice} filter={filter} onHandleFilter={handleFilter}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onHandleBuy={handleBuy} />
        </div>
        <div className="col-4">
          <PortfolioContainer myStocks={myStocks} onHandleSell={handleSell} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
