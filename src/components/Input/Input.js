import React from "react";
import './Input.css'


export const Input = ({inputCity, handleChange}) =>{
  return(

  <div className="form-section__city-element">
    <label className="form-section__city-element--city-label"
           htmlFor="city">Your destination or hotel name
    </label>
    <input onChange={handleChange}
      className="form-section__city-element--city-form"
          value={inputCity}
           type="text"
           id="city"/>
  </div>
)
};