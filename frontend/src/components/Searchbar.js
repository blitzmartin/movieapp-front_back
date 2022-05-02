import React, { useState } from "react"

function Searchbar() {

  const [value, setValue] = useState('')

  function searchTitle(value) {
    console.log(value);
  }

  function submitHandler() {
    console.log(value)
    setValue("");
  }

  return (
    <>
      <input
        className='search'
        type="text"
        placeholder="Search movie..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="searchBtn" onClick={submitHandler}>Search</button>
    </>
  )
}

export default Searchbar
