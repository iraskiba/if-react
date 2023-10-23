
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


console.log(data)
export const App = () => {
  const [city, setCity] = useState('')
  const [showHotels, setShowHotels] = useState([]);
  console.log(data)
  const handleChange = (event)=>{
    event.preventDefault()
    setCity(event.target.value);
    console.log(data)
  }
  const handleClick = (event) => {
    event.preventDefault()
    const result = data.filter(item => item.city.toLowerCase() === city.toLowerCase());
    setShowHotels(result);
    console.log(result);
    console.log(data)
    console.log(result)
  };

  return (
    <div>
      <>
        <Sprite/>
      </>
      <TopSection>
        <Wrapper>
          <Form setShowHotels={setShowHotels} city={city} handleChange={handleChange} handleClick={handleClick}/>
        </Wrapper>
      </TopSection>
      <AvailableHotels result={showHotels}/>
      <Title/>
   <Contentbox/>
</div>
  );
}



