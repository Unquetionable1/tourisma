import React, { useState, useEffect } from 'react';
import CityCard from './CityCard';

const CityList = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./src/db.json'); 
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCities(data.cityData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const deleteCity = (id) => {
    setCities(cities.filter(city => city.id !== id));
  };

  return (
    <div>
      <h1>City List</h1>
      <div className="city-list">
        {cities.map(city => (
          <CityCard key={city.id} city={city} deleteCity={deleteCity} />
        ))}
      </div>
    </div>
  );
};

export default CityList;