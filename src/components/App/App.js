
import './App.css';
import {Contentbox} from "../Contentbox";
import {Title} from "../Title";
import {Sprite} from "../Sprite";
import {Form} from "../Form";
import {Wrapper} from "../Wrapper";
import {TopSection} from "../TopSection";
import React, {useState} from "react";
import {data} from "../Mock/Mock";
import {AvailableHotels} from "../AvailableHotels";



export const App = () => {
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

  return (
    <div>
      <>
        <Sprite/>
      </>
      <TopSection>
        <Wrapper>
          <Form city={city} setCity={setCity} handleChange={handleChange} handleClick={handleClick}/>
        </Wrapper>
      </TopSection>

      <Title/>
   <Contentbox/>
</div>
  );
}



