import React from 'react'

function SearchBar({ handleChangeSort }) {
  const handleSortChange = ({ target }) => {
    handleChangeSort(target.value)
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input type='radio' value='Alphabetically' name='sort' checked={null} onChange={handleSortChange} />
        Alphabetically
      </label>
      <label>
        <input type='radio' value='Price' name='sort' checked={null} onChange={handleSortChange} />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={null}>
          <option value='Tech'>Tech</option>
          <option value='Sportswear'>Sportswear</option>
          <option value='Finance'>Finance</option>
        </select>
      </label>
    </div>
  )
}

export default SearchBar
