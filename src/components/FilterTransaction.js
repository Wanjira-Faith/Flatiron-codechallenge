import React, { useState } from 'react'

function FilterTransaction({onSearching}) {
    const [search, setSearch] = useState("")

    function handleSearchBar (e){
        setSearch(e.target.value)
        onSearching(search)
    }
  return (
    <div>
      
    </div>
  )
}

export default FilterTransaction
