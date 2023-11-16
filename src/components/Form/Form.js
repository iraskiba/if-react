
import './Form.css'
import {Input} from "../Input";
import {Btn} from "../Btn";
import {useContext, useState} from "react";
import MyContext  from '../Context/MyContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export const Form = ()=> {
  const [date,setDate]=useState(new Date())
  const {GetHotels} = useContext(MyContext)
  const [inputCity, setInputCity] = useState('');

  const handleChange = (event) => {
    event.preventDefault()
    if (event.target.name === 'city') {
      setInputCity(event.target.value);
    }
  };

  const handleClick = async (event) => {
    event.preventDefault();
    GetHotels(inputCity)
  }

  return (
    <div className="form-section">
      <form onSubmit={handleClick}>
        <Input onChange={handleChange} htmlFor="city" value={inputCity} name="city" id="city"/>
        <div className="form-section__date-element">
          <label className="form-section__date-element--date__label" htmlFor="date">Check-in — Check-out</label>
          <div className="form-section__date-element--date__form">
            <DatePicker className="datePicker"
                        selected={date}
                       onChange={(date) => setDate(date)}
                        monthsShown={2}
                        id="date"
                        />
          </div>

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

}

