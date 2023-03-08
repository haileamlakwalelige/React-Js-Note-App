import React from 'react'
import { MdSearch } from 'react-icons/md'

function Search({handleSearchNote}) {
  return (
    <div className='search'>
      <MdSearch  className='search-icon' size="1.3em"/>
      <input
       type='text'
        placeholder="type to Search .."
        onChange={(event)=>handleSearchNote(event.target.value)}
         />
    </div>
  )
}

export default Search
