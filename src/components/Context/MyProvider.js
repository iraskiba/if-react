
import {useState} from "react";
import {filtred} from "../Mock/filterH";
import MyContext from "../Context/MyContext";



export const MyProvider = ({children}) => {
  const [data, setData] = useState([])
  const GetHotels = async (inputCity) =>{
    let URLhotels = new URL('https://if-student-api.onrender.com/api/hotels');
    URLhotels.searchParams.append('search', inputCity);
    fetch(URLhotels)
      .then(response => response.json())
      .then(data => {
        const filteredData = filtred(data, inputCity);
        setData(filteredData);
      })
      .catch(error => console.error('Ошибка', error));
    console.log(URLhotels.searchParams.get('search'));

  }
  return (
    <MyContext.Provider value={{data, GetHotels}}>
      {children}
    </MyContext.Provider>
  )
}