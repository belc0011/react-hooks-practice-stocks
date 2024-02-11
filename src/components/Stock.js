import React, {useState} from "react";

function Stock({name, ticker, price, type, id, portfolioStocks, setPortfolioStocks}) {
  function handleClick(event) {
    const stockId = parseInt(event.target.id)
    const stockChange = {name: name, ticker: ticker, price: price, type: type, id: id}
    
    const foundStock = portfolioStocks.find((stock) => stock.name === name)
    if (foundStock) {
      setPortfolioStocks(portfolioStocks.filter((stock) => {
        return stock.name !== name
      }))
    }
    else {
      setPortfolioStocks([...portfolioStocks, stockChange])
    }
  }
  return (
    <div  id={id}>
      <div className="card" id={id}>
        <div className="card-body" id={id} onClick={handleClick}>
          <h5 className="card-title" id={id}>{name}</h5>
          <p className="card-text" id={id}>{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
