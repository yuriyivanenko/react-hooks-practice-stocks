import React, { useEffect, useState } from 'react'
import Stock from './Stock'

function StockContainer({ handleStockClick, sortBy, filterBy }) {
  const [stockList, setStockList] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then((res) => res.json())
      .then((data) => setStockList(data))
  }, [])

  const sortStocks = () => {
    if (sortBy === 'Alphabetically') {
      return [...stockList].sort((a, b) => a.name.localeCompare(b.name))
    } else {
      return [...stockList].sort((a, b) => a.price - b.price)
    }
  }

  const sortedList = sortBy ? sortStocks() : stockList
  const filteredList = filterBy ? [...sortedList].filter((stock) => stock.type === filterBy) : sortedList

  if (!stockList) return <h1>Loading...</h1>
  return (
    <div>
      <h2>Stocks</h2>
      {filteredList.map((stock) => {
        return <Stock key={`stock-${stock.id}`} handleStockClick={handleStockClick} stockInfo={stock} />
      })}
    </div>
  )
}

export default StockContainer
