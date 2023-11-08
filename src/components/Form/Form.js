
import './Form.css'
import {Input} from "../Input";
import {Btn} from "../Btn";
import {filtred} from '../Mock/filterH'
import React, {Component} from "react";


export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputCity: '',
    }
  }
  URL = new URL('https://if-student-api.onrender.com/api/hotels')
  param = new URLSearchParams();

  getAll() {
    this.URL.search = this.param.toString();
    return this.URL.toString();
  }

  handleChange = (event) => {

    event.preventDefault()
    if (event.target.name === 'city') {
      this.setState({inputCity: event.target.value});
      this.param.set('search', event.target.value.toString());
     this.URL.search = this.param.toString();
    }
  };

  handleClick = (event) => {
    event.preventDefault()
    const URL = 'https://if-student-api.onrender.com/api/hotels'
    fetch(this.URL)
      .then((response) => response.json())
      .then((data) => {
        let filter = filtred(data, this.state.inputCity);
        this.props.setCity(filter)
        this.URL.search = this.param.toString();
        const fullUrl = this.getAll();
        console.log(fullUrl)
        //this.setState({inputCity: ''});
      })
  }


  render() {
    return (
      <div className="form-section">
        <form onSubmit={this.handleClick}>
          <Input onChange={this.handleChange} htmlFor="city" value={this.state.inputCity} name="city" id="city"/>
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

  }
}

