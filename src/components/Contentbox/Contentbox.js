import React from "react";
import './Contentbox.css';
import {Card} from "../Card";


export class Contentbox extends React.Component{
constructor(props) {
  super(props);
  this.state ={
    hotels :[]
  }
}
  componentDidMount() {
    const URL = 'https://if-student-api.onrender.com/api/hotels/popular';
    fetch(URL)
      .then((response) => response.json())
      .then((data) => this.setState({hotels:data}))
  }
  render(){
    return <div className="section-homes__items">
      {this.state.hotels.slice(0,4).map((img) => (
        <Card key={img.id}
              name={img.name}
              city={img.city}
              country={img.country}
              image={img.imageUrl}/>
      )) }

    </div>

  }
}
