
import './AvailableHotels.css';
import {Wrapper} from "../Wrapper";
import {useContext} from "react";
import MyContext from "../Context/MyContext";

export const AvailableHotels = () => {

const {data} = useContext(MyContext);

  return (
    <div className="available-hotels">
      <Wrapper>
        <h3 className="available-hotels__title">Available hotels</h3>
        <div id="available-hotels_items">
          {data && data.map((img) =>
            <div key={img.id}>
              <img className='available-hotels__img' src={img.imageUrl} alt={img.name}/>
              <h3 className='available-hotels__hotel-name'> {img.name}</h3>
              <p className='available-hotels__location'>{img.city}, {img.country}
              </p>
            </div>
          )}
        </div>
      </Wrapper>
    </div>
  );
};