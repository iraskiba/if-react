import React from "react";
import './Homes.css';
import {Wrapper} from "../Wrapper";
import '../../styles/variables.css'
const Homes = () => (
  <section className="section-homes section-homes__bg">
    <Wrapper>

      <div className="section-homes__items">
        </div>

      <button className="circle section-homes__circle-position" aria-label="arrow scroll right">
        <svg className="arrow__svg">
          <use href="#arrow"></use>
        </svg>
      </button>
      </Wrapper>
  </section>
);