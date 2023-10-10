import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, handleClickEvent}) {
  
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(stock => 
      <Stock 
      key={stock.id}
      id={stock.id}
      ticker={stock.ticker}
      name={stock.name}
      type={stock.type}
      price={stock.price}
      handleClickEvent={handleClickEvent}
      />)}
    </div>
  );
}

export default StockContainer;
