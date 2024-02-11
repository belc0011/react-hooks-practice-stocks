import React, {useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [portfolioStocks, setPortfolioStocks] = useState([])
  const [stocks, setStocks] = useState([])
  console.log(portfolioStocks)
  console.log(typeof portfolioStocks)
  return (
    <div>
      <SearchBar stocks={stocks} setStocks={setStocks}/>
      <div className="row">
        <div className="col-8">
          <StockContainer portfolioStocks={portfolioStocks} setPortfolioStocks={setPortfolioStocks} stocks={stocks} setStocks={setStocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStocks={portfolioStocks} setPortfolioStocks={setPortfolioStocks}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
