import React, {useEffect, useState} from "react";
import Stock from "./Stock";

function StockContainer({portfolioStocks, setPortfolioStocks, stocks, setStocks}) {

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(res => res.json())
    .then(data => setStocks(data))
  }, [])
  
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => {
      return <Stock key={stock.id} ticker={stock.ticker} name={stock.name} price={stock.price} type={stock.type} id={stock.id} portfolioStocks={portfolioStocks} setPortfolioStocks={setPortfolioStocks} />})}
    </div>
  );
}

export default StockContainer;
