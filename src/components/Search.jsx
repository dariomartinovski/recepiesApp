import React, { useState } from 'react'
import '../styles/Search.css'
import { useNavigate } from 'react-router-dom';

export default function Search({setSearchFilter}) {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/recepiesApp/search/'+input);
    setInput("");
  }

  return (
    <form className="inputContainer" onSubmit={submitHandler}>
      <input type="text" onChange={e => setInput(e.target.value)} value={input}/>
      <select name="filter" id="filter" onChange={(e)=>setSearchFilter(e.target.value)}>
        <option value="Food">Food</option>
        <option value="Cocktail">Cocktail</option>
      </select>
      <button type='submit'>Search</button>
    </form>
  )
}
