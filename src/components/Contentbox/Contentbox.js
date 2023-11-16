import React, {useEffect, useState} from "react";
import './Contentbox.css';
import {Card} from "../Card";


export const Contentbox = ()=>{
const [hotels,setHotels] = useState([])

useEffect(() => {
  const URL = 'https://if-student-api.onrender.com/api/hotels/popular';
  fetch(URL)
    .then((response) => response.json())
    .then((data) => setHotels(data));
},[]);
return(
      <div className="section-homes__items">
      {hotels.slice(0,4).map((img) => (
        <Card key={img.id}
              name={img.name}
              city={img.city}
              country={img.country}
              image={img.imageUrl}/>
      )) }

    </div>
);
};
