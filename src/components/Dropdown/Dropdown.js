import React from "react";
import './Dropdown.css'
import classNames from "classnames";
import {Button} from "../Button";
import '../Button/Button.css'
import {useReducer} from "react";


const initialState = {
  adults: 0,
  children: 0,
  rooms: 0,

};


function reducer (state,action) {
switch (action.type) {
case 'increment':
return {...state,[action.payload]:state[action.payload]+1};
case 'decrement':
  return {...state,[action.payload]:state[action.payload]-1};
default:
  return state;
}
}
export const Dropdown  = ({className})=> {
  const [state,dispatch] = useReducer(reducer,
    initialState
   );
  const handleSetChildrenAges = (index, value) => {
    dispatch({ type: 'setChildrenAges', payload: { index, value } });
  };

  return(
  <div id="dropdown" className={classNames('dropdown', className)}>
    <div>
      <p className="name-item item-first">Adults</p>
      <p className="name-item medium-item">Children</p>
      <p className="name-item">Rooms</p>
    </div>

    <div>

      <Button  onClick={()=> {
        dispatch({type:'decrement',payload:'adults'});}} type="button"  className='decrease-adults' >-</Button>

      <Button onClick={()=> {
        dispatch({type:'decrement',payload:'children'});}} type="button"  variant='medium' className='decrease-children'>-</Button>

      <Button onClick={()=> {
        dispatch({type:'decrement',payload:'rooms'});}} type="button"  className='decrease-rooms'>-</Button>
    </div>

    <div>
      <p className="num name-item item-first value-adults" >{state.adults}</p>
      <p className="num name-item medium-item value-children">{state.children}</p>
      <p className="num name-item value-rooms">{state.rooms}</p>
    </div>

    <div>
      <Button onClick={()=>{
        console.log('ira');
        dispatch({type:'increment',payload:'adults'});
      }} type="button" className='increase-adults'>+</Button>

      <Button onClick={()=>{
        dispatch({type:'increment',payload:'children'});
      }} type="button" variant='medium' className='increase-children,child_add'>+</Button>

      <Button onClick={()=>{
        dispatch({type:'increment',payload:'rooms'});
      }} type="button"  className='increase-rooms'>+</Button>
    </div>
    {state.children > 0 && (
      <div className = "dropdown dropdown__children_hidden" style={{visibility:state.children >= 1 ? 'visible':'hidden'}}>
      <div className = "dropdown__added-child" id="form">
        <h3  className="age-child">What is the age of the child you’re travelling with?</h3>
          {[...Array(state.children)].map((child,index) =>
            (<select key={index} onChange={(e) =>handleSetChildrenAges(index,e.target.value)} > {[...Array(18)].map((_, i) => (<option key={i}>{i} years old</option>))}
            </select>))}
            </div>
    </div>
      )}
  </div>
  )
}
