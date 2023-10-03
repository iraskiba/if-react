import React from "react";
import './Contentbox.css';
import {Card} from "../Card";
import { data } from '../Mock/Mock'


export const Contentbox = (item) => (
  <div className="section-homes__items">
    {data.slice(0,4).map((img) => (
      <Card key={img.id}
        name={img.name}
            city={img.city}
            country={img.country}
            image={img.imageUrl}/>
    )) }

  </div>
);