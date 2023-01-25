import React, { useState } from 'react';
import Car from '../Car/Car';
import Loading from '../Loading/Loading';

import './Cars.style.css';

const CarsSlider = ({ cars }) => {
  const [car, setCar] = useState(cars[1]);

  const handleClick = (carId) => {
    const car = cars.find((car) => car.id === carId);
    setCar(car);
  };
  if (cars.length > 1) {
    return (
      <div className='cars-container'>
        <h2>available cars</h2>
        <div className='car-slide'>
          {cars.map((car) => {
            return (
              <img
                key={car.id}
                src={car.images[1]}
                className='slide-car'
                alt={car.carName}
                onClick={() => handleClick(car.id)}
              />
            );
          })}
        </div>
        <Car car={car} />
      </div>
    );
  }
  return <Loading />;
};

export default CarsSlider;
