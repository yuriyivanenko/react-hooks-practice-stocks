import React, { useState } from 'react'
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from './SearchBar'

function MainContainer() {
  const [stockToBuy, setStockToBuy] = useState(null)
  const [sortBy, setSortBy] = useState()
  const [filterBy, setFilterBy] = useState()

  const handleChangeSort = (sortMethod) => setSortBy(sortMethod)
  const handleStockClick = (stock) => setStockToBuy(stock)

  return (
    <div>
      <SearchBar handleChangeSort={handleChangeSort} setFilterBy={setFilterBy} />
      <div className='row'>
        <div className='col-8'>
          <StockContainer handleStockClick={handleStockClick} sortBy={sortBy} filterBy={filterBy} />
        </div>
        <div className='col-4'>
          <PortfolioContainer stockToBuy={stockToBuy} />
        </div>
      </div>
    </div>
  )
}

export default MainContainer
