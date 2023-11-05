
import './App.css';
import {Contentbox} from "../Contentbox";
import {Title} from "../Title";
import {Sprite} from "../Sprite";
import {TopSection} from "../TopSection";
import React, {useState} from "react";
import {AvailableHotels} from "../AvailableHotels";



export const App = () => {
  const [city, setCity] = useState([])

  return (
    <div>
      <>
        <Sprite/>
      </>
      <TopSection setCity={setCity}/>
      <AvailableHotels  city={city}/>
      <Title/>
   <Contentbox/>
</div>
  );
}



