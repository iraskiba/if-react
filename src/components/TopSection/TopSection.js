import React from "react";
import './TopSection.css'
import {Wrapper} from "../Wrapper";
import classNames from "classnames";
import '../Wrapper/Wrapper.css'
import styles from './background.module.css'
import {Form} from "../Form";


export const TopSection = ({setCity}) =>(
  <section className={classNames('top-section', styles['top-section__bg'] , classNames)}>
   <Wrapper>
<Form setCity={setCity}/>
   </Wrapper>

  </section>
);