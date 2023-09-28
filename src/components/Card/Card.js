import React from "react";
import './Card.css'
import {Name} from "../Name";
import {Location} from "../Location";
import {ImageCard} from "../ImageCard";

export const Card = ({name, city, country, image}) =>(
  <section>
    <ImageCard image={image} name={name}/>
    <Name name={name}/>
    <Location city={city} country={country}/>
  </section>
);