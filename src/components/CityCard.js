import React from 'react';

const CityCard = ({ city, deleteCity }) => {
  return (
    <div className="city-card">
      <img src={city.image} alt={city.city} />
      <h2>{city.city}</h2>
      <p>{city.info}</p>
      <button onClick={() => deleteCity(city.id)}>Delete</button>
    </div>
  );
};

export default CityCard;