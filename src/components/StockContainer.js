import React, { useEffect, useState } from 'react'
import Stock from './Stock'

function StockContainer() {
  const [stockList, setStockList] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then((res) => res.json())
      .then((data) => setStockList(data))
  }, [])

  if (!stockList) return <h1>Loading...</h1>
  return (
    <div>
      <h2>Stocks</h2>
      {stockList.map((stock) => {
        return <Stock key={`stock-${stock.id}`} stockInfo={stock} />
      })}
    </div>
  )
}

export default StockContainer
