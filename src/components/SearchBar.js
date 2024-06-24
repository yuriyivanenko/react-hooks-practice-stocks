import React, { useEffect } from 'react'

function SearchBar({ handleChangeSort, setFilterBy }) {
  const handleSortChange = ({ target }) => {
    handleChangeSort(target.value)
  }

  const filterChange = ({ target }) => {
    setFilterBy(target.value)
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
        <select onChange={filterChange}>
          <option value=''>Select...</option>
          <option value='Tech'>Tech</option>
          <option value='Sportswear'>Sportswear</option>
          <option value='Finance'>Finance</option>
        </select>
      </label>
    </div>
  )
}

export default SearchBar
