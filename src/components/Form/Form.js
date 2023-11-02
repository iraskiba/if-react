
import './Form.css'
import {Input} from "../Input";
import {Btn} from "../Btn";
import {data} from '../Mock';
import {useState} from "react";
import {filtred} from '../Mock/filterH'

export const Form = ({setCity}) => {
  const [inputCity, setInputCity] = useState('')
  const handleChange = (event) => {
    event.preventDefault()
    if(event.target.name ==='city'){
      setInputCity(event.target.value);
    }
  };

  const handleClick = (event) => {
    event.preventDefault()
    console.log('ira')
    console.log(inputCity)
    let filter = filtred(data, inputCity);
    setCity(filter)
    setInputCity('')
  }
   return(
   <div className="form-section" >
     <form onSubmit={handleClick} >
       <Input onChange={handleChange} htmlFor="city" value={inputCity} name="city" id="city"/>
       <div className="form-section__date-element">
         <label className="form-section__date-element--date__label" htmlFor="date">Check-in — Check-out</label>
         <input className="form-section__date-element--date__form"
                type="text"
                id="date"
                defaultValue="Tue 15 Sept - Sat 19 Sept"/>
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
<Btn/>
     </form>
   </div>
   )
 };

