import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
/*
- Read stocks in here
- Handle adding and removing here, pass the event.target object up for each
- State
  - portfolio
  - filter
  - sort by
- buyStock
  - Event listener on stocks on the stock list
  - Check to see if the stock is already bought
- sellStock
  - Event listener on stocks in the portfolio
  - Filters that stock from the list
*/
function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState("Alphabetically");
  const [filter, setFilter] = useState("All");
  
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(response => response.json())
    .then(setStocks)
  }, [])

  function buyStock(stock) {
    if (!portfolio.some(ownedStock => ownedStock.id === stock.id)) setPortfolio([...portfolio, stock]);
  }

  function sellStock(stock) {
    setPortfolio(portfolio.filter(ownedStock => ownedStock.id !== stock.id));
  }

  const sortedStocks = sortBy === "Alphabetically" ?
    stocks.sort((a, b) => a.name <= b.name ? -1 : 1) :
    stocks.sort((a, b) => a.price <= b.price ? -1 : 1);
  
  const filteredStocks = sortedStocks.filter(stock => filter === "All" || stock.type === filter)

  return (
    <div>
      <SearchBar setSortBy={setSortBy} setFilter={setFilter} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} handleClickEvent={buyStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} handleClickEvent={sellStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
