import React from "react";
import './AvailableHotels.css';
import {Wrapper} from "../Wrapper";
import '../Mock/Mock'


export const AvailableHotels = ({result}) =>(
  <div className="available-hotels">
    <Wrapper>
      <h3 className="available-hotels__title">Available hotels</h3>
      <div id="available-hotels_items" >
        {result.map((img) =>
          <div key={img.id}>
            <img className ='available-hotels__img'  src={img.imageUrl} alt={img.name}/>
            <h3 className='available-hotels__hotel-name'> {img.name}</h3>
            <p className='available-hotels__location'>{img.city}, {img.country}</p>

          </div>
          )}
      </div>
    </Wrapper>
  </div>
)