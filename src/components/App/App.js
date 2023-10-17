
import './App.css';
import {Contentbox} from "../Contentbox";
import {Title} from "../Title";
import {Sprite} from "../Sprite";
import {Form} from "../Form";
import {Wrapper} from "../Wrapper";
import {TopSection} from "../TopSection";
import {AvailableHotels} from "../AvailableHotels";
import {useState} from "react";
import {data} from "../Mock/Mock";

export const App = () => {

  return (
    <div>
      <>
        <Sprite/>
      </>
      <TopSection>
        <Wrapper>
          <Form/>
        </Wrapper>

      </TopSection>
      <AvailableHotels result={data}/>

      <Title/>
   <Contentbox/>
</div>
  );
}



