import React from 'react'

function Stock({ stockInfo, handleStockToBuy }) {
  const { ticker, name, price } = stockInfo
  const handleOnClick = () => {
    handleStockToBuy(stockInfo)
  }
  return (
    <div>
      <div className='card' style={{ cursor: 'pointer' }} onClick={handleOnClick}>
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text'>{`${ticker}: ${price}`}</p>
        </div>
      </div>
    </div>
  )
}
export default Stock
