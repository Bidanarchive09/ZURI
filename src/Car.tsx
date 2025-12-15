import React from 'react';
import type { Car as CarType } from './types';

interface CarProps {
  car: CarType;
}

const Car: React.FC<CarProps> = ({ car }) => {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} />
      <div className="car-info">
        <h3>{car.name}</h3>
        <p className="car-description">{car.description}</p>
        <div className="car-details">
          <span className="car-category">{car.category}</span>
          <span className="car-location">📍 {car.location}</span>
        </div>
        <div className="car-specs">
          <span>Year: {car.year}</span>
          <span>Mileage: {car.mileage.toLocaleString()} km</span>
        </div>
        <div className="import-details">
          <div className="spec-row">
            <span>Engine: {car.engineCapacity ? car.engineCapacity + 'cc' : 'N/A'}</span>
            <span>Transmission: {car.transmission || 'N/A'}</span>
          </div>
          <div className="spec-row">
            <span>Drive: {car.driveType || 'N/A'}</span>
            <span>Fuel: {car.fuelType || 'N/A'}</span>
          </div>
          <div className="spec-row">
            <span>Color: {car.color || 'N/A'}</span>
            <span>Steering: {car.steering || 'N/A'}</span>
          </div>
          <div className="spec-row">
            <span>Auction Grade: {car.grade || 'N/A'}</span>
            <span>Imported: {car.importYear || 'N/A'}</span>
          </div>
        </div>
        <p className="car-price">KES {car.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Car;