export const filtred = (arr, string) => {
  const hotels = arr.filter(({name, city, country}) => {
    const nameT = name.toLowerCase()
    const cityT = city.toLowerCase()
    const countryT = country.toLowerCase();
    const stringT = string.toLowerCase();

    return (
      nameT.includes(stringT) ||
      cityT.includes(stringT) ||
      countryT.includes(stringT)
    );
  });
  if (hotels.length > 4) {
    return hotels.slice(0, 4);
  } else {
    return hotels
  }
}
