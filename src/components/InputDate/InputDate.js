import React from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import './InputDate.css'

const InputDate = ({type="text",htmlFor, ...props}) =>{
  return(


        <DatePicker className="form-section__date-element--date__form" type={type}
                    {...props}/>



  )
};
