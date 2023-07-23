import React, { useState } from 'react'

function FilterTransaction({onSearching}) {
    const [search, setSearch] = useState("")

    function handleSearchBar (e){
        setSearch(e.target.value)
        onSearching(search)
    }
  return (
      <form id='search-bar'>
        <input
          value={search}
          type="text"
          placeholder="Search recent transactions"
          onChange={handleSearchBar}
        ></input>
      </form>
  );
}

export default FilterTransaction
