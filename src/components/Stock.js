import React from "react";

function Stock({id, ticker, name, type, price, handleClickEvent}) {
  return (
    <div>
      <div className="card" onClick={() => handleClickEvent({id: id, ticker: ticker, name: name, type: type, price: price})}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{`${ticker}: ${price}`}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
