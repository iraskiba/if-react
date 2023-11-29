import React from "react";
import classNames from "classnames";
import './Button.css'
export const Button = ({className,variant, type,...props})=>{
 const variants = {
   active:variant === 'active',
   medium:variant === 'medium'
 }
 return(
   <button  className={classNames('count-button', className, {
...variants,
   })} type={type} {...props}></button>
 )
}