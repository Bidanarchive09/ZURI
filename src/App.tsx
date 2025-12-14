import { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import CarList from './CarList';
import Footer from './Footer';
import { cars } from './data';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [transmissionFilter, setTransmissionFilter] = useState('');
  const [driveFilter, setDriveFilter] = useState('');
  const [fuelFilter, setFuelFilter] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const filteredCars = cars.filter(car =>
    (car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     car.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (categoryFilter === '' || car.category === categoryFilter) &&
    (locationFilter === '' || car.location === locationFilter) &&
    (transmissionFilter === '' || car.transmission === transmissionFilter) &&
    (driveFilter === '' || car.driveType === driveFilter) &&
    (fuelFilter === '' || car.fuelType === fuelFilter) &&
    (minPrice === '' || car.price >= parseInt(minPrice) * 1000000) &&
    (maxPrice === '' || car.price <= parseInt(maxPrice) * 1000000)
  );

  const categories = [...new Set(cars.map(car => car.category))];
  const locations = [...new Set(cars.map(car => car.location))];
  const transmissions = [...new Set(cars.map(car => car.transmission))];
  const driveTypes = [...new Set(cars.map(car => car.driveType))];
  const fuelTypes = [...new Set(cars.map(car => car.fuelType))];

  return (
    <div className="app">
      <Header />
      <Hero />
      <main className="main-content">
        <div className="container">
          <section id="cars" className="cars-section">
            <h2>Available Cars</h2>
            <div className="filters">
              <input
                type="text"
                className="search-input"
                placeholder="Search cars..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <select
                value={categoryFilter}
                onChange={e => setCategoryFilter(e.target.value)}
                className="filter-select"
              >
                <option value="">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <select
                value={locationFilter}
                onChange={e => setLocationFilter(e.target.value)}
                className="filter-select"
              >
                <option value="">All Locations</option>
                {locations.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
              <select
                value={transmissionFilter}
                onChange={e => setTransmissionFilter(e.target.value)}
                className="filter-select"
              >
                <option value="">All Transmissions</option>
                {transmissions.map(trans => (
                  <option key={trans} value={trans}>{trans}</option>
                ))}
              </select>
              <select
                value={driveFilter}
                onChange={e => setDriveFilter(e.target.value)}
                className="filter-select"
              >
                <option value="">All Drive Types</option>
                {driveTypes.map(drive => (
                  <option key={drive} value={drive}>{drive}</option>
                ))}
              </select>
              <select
                value={fuelFilter}
                onChange={e => setFuelFilter(e.target.value)}
                className="filter-select"
              >
                <option value="">All Fuel Types</option>
                {fuelTypes.map(fuel => (
                  <option key={fuel} value={fuel}>{fuel}</option>
                ))}
              </select>
              <input
                type="number"
                placeholder="Min Price (M KES)"
                value={minPrice}
                onChange={e => setMinPrice(e.target.value)}
                className="price-input"
              />
              <input
                type="number"
                placeholder="Max Price (M KES)"
                value={maxPrice}
                onChange={e => setMaxPrice(e.target.value)}
                className="price-input"
              />
            </div>
            <CarList cars={filteredCars} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App
