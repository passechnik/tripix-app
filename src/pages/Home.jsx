// Home.jsx
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Trip from '../components/Trip'; // Import the Trip component

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [tripName, setTripName] = useState('');
  const [tripDate, setTripDate] = useState('');
  const [trips, setTrips] = useState([]);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // You can reset the form values here if needed
    setTripName('');
    setTripDate('');
  };

  const handleAddTrip = () => {
    // Create a new trip object
    const newTrip = {
      name: tripName,
      date: tripDate,
    };

    // Update the trips state with the new trip
    setTrips((prevTrips) => [...prevTrips, newTrip]);

    // Close the modal after adding the trip
    handleCloseModal();
  };

  const handleDeleteTrip = (index) => {
    // Create a copy of the current trips array
    const updatedTrips = [...trips];

    // Remove the trip at the specified index
    updatedTrips.splice(index, 1);

    // Update the trips state with the modified array
    setTrips(updatedTrips);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <h2>My Trips</h2>
      {trips.length === 0 ? (
        <h4>You have no trips.</h4>
      ) : (
        <ul>
          {trips.map((trip, index) => (
            <Trip
              key={index}
              trip={trip}
              onDelete={() => handleDeleteTrip(index)}
            />
          ))}
        </ul>
      )}

      <button className="btn btn-home" onClick={handleShowModal}>
        Add Trip
      </button>

      {/* Modal for adding a new trip */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Trip</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="tripName">
              <Form.Label>Trip Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter trip name"
                value={tripName}
                onChange={(e) => setTripName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="tripDate">
              <Form.Label>Choose the trip date</Form.Label>
              {/* You can replace this with a Bootstrap date picker component */}
              <Form.Control
                type="date"
                value={tripDate}
                onChange={(e) => setTripDate(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddTrip}>
            Create Trip
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export { Home };
