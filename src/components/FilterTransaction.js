import React, { useState } from 'react'

function FilterTransaction({search,setSearch}) {

    function handleSearchBar (e){
        setSearch(e.target.value)
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



