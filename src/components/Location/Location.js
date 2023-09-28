import React from "react";
import './Location.css';

export const Location = ({country,city})=>(
  <p className="section-homes__hotel-location">
    {country}, {city}
  </p>
);