import React from "react";
import "./search-box-styles.css"

export const SearchBox=({placeholder, changeHandler})=>(
  <div className="main">
 <input className="search"
          type="search" 
          placeholder={placeholder}
          onChange={changeHandler} />
  </div>
 
);