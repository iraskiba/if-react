import React from "react";
import './ImageCard.css';

export const ImageCard = ({image,name})=>(
  <img src={image} alt={name} className="section-homes__items__img"/>
  );
