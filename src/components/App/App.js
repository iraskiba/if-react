
import './App.css';
import {Contentbox} from "../Contentbox";
import {Title} from "../Title";
import {Sprite} from "../Sprite";
import {TopSection} from "../TopSection";
import React, {useContext, useState} from "react";
import {AvailableHotels} from "../AvailableHotels";
import {MyProvider} from "../Context/MyProvider";


export const App = () => {

  return (
    <div>
      <>
        <Sprite/>
      </>
      <MyProvider value={{city:'city'}}>
        <TopSection />

        <AvailableHotels  />
      </MyProvider>
      <Title/>
   <Contentbox/>
</div>
  );
}



