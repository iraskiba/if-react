import React, {useState} from "react";
import './Btn.css'


export const Btn =({handleClick, showHotels, result}) => {

  return (
    <button  type="submit"  onSubmit={handleClick} id="button-search" className="form-section__button-element">Search
    </button>
  )
}
