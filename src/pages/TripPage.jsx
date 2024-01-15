import React from 'react';
import { useParams } from 'react-router-dom';

const TripPage = ({ trips }) => {
  // Get the trip id from the route parameters
  const { id } = useParams();
  const tripId = parseInt(id, 10);

  // Find the trip with the specified id
  const trip = trips.find((t) => t.id === tripId);

  // If no trip is found, display "No trip found"
  if (!trip) {
    return <h2>No trip found</h2>;
  }

  // Display trip details
  return (
    <div>
      <h2>Trip Details</h2>
      <p>Name: {trip.name}</p>
      <p>Date: {trip.date}</p>
      {/* Add other trip details as needed */}
    </div>
  );
};

export default TripPage;
