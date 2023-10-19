
import './Input.css'


export const Input = ({ handleChange}) =>{
  return(

  <div className="form-section__city-element">
    <label className="form-section__city-element--city-label"
           htmlFor="city">Your destination or hotel name
    </label>
    <input onChange={handleChange}
      className="form-section__city-element--city-form"
           defaultValue="New York"
           type="text"
           id="city"/>
  </div>
)
};