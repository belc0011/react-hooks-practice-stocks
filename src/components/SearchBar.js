import React, {useEffect, useState} from "react";

function SearchBar({stocks, setStocks}) {
  const [sortAlphabetically, setSortAlphabetically] = useState(false)
  const [sortByPrice, setSortByPrice] = useState(false)
  const [filter, setFilter] = useState(false)

  function handleAlphabetChange(event) {
    console.log(sortAlphabetically)
    setSortAlphabetically(prevState => !prevState)
    console.log(sortAlphabetically)
    const alphabeticalArray = [...stocks];
    if (!sortAlphabetically) {
      alphabeticalArray.sort((a, b) => {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        }
        else return 0;
      })
      setStocks(alphabeticalArray)
    }
    else {
      fetch('http://localhost:3001/stocks')
      .then(res=> res.json())
      .then(data => setStocks(data))
    }
  }

  function handlePriceChange(event) {
    setSortByPrice(prevState => !prevState)
    const priceArray = [...stocks]
    if (!sortByPrice) {
      priceArray.sort((a,b) => {
        if (a.price < b.price) {
          return -1
        }
        if (a.price > b.price) {
          return 1
        }
        else return 0;
      })
      setStocks(priceArray)
    }
    else {
      fetch('http://localhost:3001/stocks')
      .then(res=> res.json())
      .then(data => setStocks(data))
    }
  }

  function handleFilterChange(event) {
    const category = event.target.value
    fetch('http://localhost:3001/stocks')
      .then(res=> res.json())
      .then(data => {
      const filteredStocks = data.filter((stock) => {
      return stock.type === category
    })
    setStocks(filteredStocks)
  })
  }
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sortAlphabetically}
          onClick={handleAlphabetChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sortByPrice}
          onClick={handlePriceChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
