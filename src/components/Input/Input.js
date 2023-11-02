import React from "react";
import './Input.css'

export const Input = ({type="text",htmlFor, ...props}) =>{
  return(

  <div className="form-section__city-element">
    <label className="form-section__city-element--city-label"
           htmlFor={htmlFor} >Your destination or hotel name
    </label>
    <input
      className="form-section__city-element--city-form"
           type={type}
      {...props}
           />
  </div>
)
};