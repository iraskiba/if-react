import React, {useState} from "react";
import './Form.css'
import {Input} from "../Input";
import {data} from "../Mock/Mock";
import {Btn} from "../Btn";
import {AvailableHotels} from "../AvailableHotels";


export const Form = () => {
   const [city, setCity] = useState('')

   const [showHotels, setShowHotels] = useState([]);


   const handleChange = (event)=>{
     setCity(event.target.value);

   }
   const handleClick = (event) => {
     event.preventDefault()
     const result = data.filter(item => item.city.toLowerCase() === city.toLowerCase());

     setShowHotels(result);
     console.log(result);
   };

   return(
   <div className="form-section ">
     <form onSubmit={handleClick}>
       <Input city={city} handleChange={handleChange}/>
       <div className="form-section__date-element">
         <label className="form-section__date-element--date__label" htmlFor="date">Check-in — Check-out</label>
         <input className="form-section__date-element--date__form"
                type="text"
                id="date"
                value="Tue 15 Sept - Sat 19 Sept"/>
       </div>

       <div id="counter-block" className="counter-block">
         <div className="counter-block counter-block__adults">
           <span className="span_number" id="adult-span"> 0 </span>
           <label className="_label" htmlFor="adult-span">Adults —</label>
         </div>

         <div className="counter-block counter-block__children">
           <span className="span_number" id="children-span"> 0 </span>
           <label className="_label" htmlFor="children-span">Children —</label>
         </div>

         <div className="counter-block counter-block__rooms">
           <span className="span_number" id="rooms-span"> 0 </span>
           <label className="_label" htmlFor="rooms-span">Room</label>
         </div>
       </div>
<Btn onSubmit={handleClick} />
     </form>
   </div>
   )
 };

