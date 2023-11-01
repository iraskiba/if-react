export const filtred = (arr, string) => {
  const hotels = arr.filter(({name, city, country}) => {
    const nameT = name.toLowerCase()
    const cityT = city.toLowerCase()
   const countryT = country.toLowerCase();
    return (
      nameT.includes(string) ||
      cityT.includes(string)||
      countryT.includes(string)
    );
  });
  return hotels;
}
