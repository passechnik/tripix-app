
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import DiscoverPlaces from './pages/DiscoverPlaces';
import Settings from './pages/Settings';
import SignOut from './pages/SignOut';
import TripPage from './pages/TripPage';

export default function App() {
  // // Use state to manage the trips
  // const [trips, setTrips] = useState([]);

  // // Function to add a new trip
  // const addTrip = (newTrip) => {
  //   const updatedTrips = [...trips, { ...newTrip, id: Date.now() }];
  //   setTrips(updatedTrips);
  // };

  const [trips, setTrips] = useState([]);

  // Function to add a new trip
  const addTrip = (newTrip) => {
    // Adding a trip does not require useEffect
    setTrips((prevTrips) => [...prevTrips, { ...newTrip, id: Date.now() }]);
  };

  // Use useEffect for any side effects related to trips
  useEffect(() => {
    // For now, this effect does nothing. You can add more side effects here if needed.
  }, [trips]);
  
  return (
    <>
      <Router>
        <div className="app-container">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route
                path="/"
                element={<Home trips={trips} addTrip={addTrip} setTrips={setTrips} />}
              />
              <Route path="/discover" element={<DiscoverPlaces />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/signout" element={<SignOut />} />
              <Route path="/trip/:id" element={<TripPage trips={trips} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}
