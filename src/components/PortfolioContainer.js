import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioStocks, setPortfolioStocks}) {
  console.log(portfolioStocks)
  return (
    <div>
      <h2>My Portfolio</h2>
        {(portfolioStocks ? portfolioStocks.map((stock) => {
          return <Stock key={stock.id} name={stock.name} price={stock.price} ticker={stock.ticker} type={stock.type} portfolioStocks={portfolioStocks} setPortfolioStocks={setPortfolioStocks}/>}) : null)
        }
    </div>
  );
}

export default PortfolioContainer;
