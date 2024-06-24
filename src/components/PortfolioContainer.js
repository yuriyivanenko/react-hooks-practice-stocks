import React, { useEffect, useState } from 'react'
import Stock from './Stock'

function PortfolioContainer({ stockToBuy }) {
  const [portfolioList, setPortfolioList] = useState([])

  useEffect(() => {
    if (stockToBuy) {
      const stockExists = portfolioList.some((stock) => stock.ticker === stockToBuy.ticker)

      if (!stockExists) {
        setPortfolioList((prevList) => [...prevList, stockToBuy])
      }
    }
  }, [stockToBuy])

  const handleRemoveStock = (stockClicked) => {
    setPortfolioList(portfolioList.filter((stock) => stock.ticker !== stockClicked.ticker))
  }

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioList.map((item) => {
        return <Stock key={item.name} stockInfo={item} handleStockClick={handleRemoveStock} />
      })}
    </div>
  )
}

export default PortfolioContainer
