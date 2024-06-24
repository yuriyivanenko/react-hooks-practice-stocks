import React, { useState } from 'react'
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from './SearchBar'

function MainContainer() {
  const [stockToBuy, setStockToBuy] = useState(null)
  const handleStockToBuy = (stock) => setStockToBuy(stock)

  return (
    <div>
      <SearchBar />
      <div className='row'>
        <div className='col-8'>
          <StockContainer handleStockToBuy={handleStockToBuy} />
        </div>
        <div className='col-4'>
          <PortfolioContainer stockToBuy={stockToBuy} />
        </div>
      </div>
    </div>
  )
}

export default MainContainer
