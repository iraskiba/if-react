
import './AvailableHotels.css';
import {Wrapper} from "../Wrapper";

export const AvailableHotels = ({city}) => {


  return (
    <div className="available-hotels">
      <Wrapper>
        <h3 className="available-hotels__title">Available hotels</h3>
        <div id="available-hotels_items">
          {city.map((img) =>
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