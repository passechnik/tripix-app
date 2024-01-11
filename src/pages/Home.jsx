import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import Trip from '../components/Trip';

const Home = ({ trips, addTrip, setTrips }) => {
  const [showModal, setShowModal] = useState(false);
  const [tripName, setTripName] = useState('');
  const [tripDate, setTripDate] = useState('');

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTripName('');
    setTripDate('');
  };

  const handleAddTrip = () => {
    const newTrip = {
      name: tripName,
      date: tripDate,
      details: 'Additional details for the trip', // You can customize this
    };

    addTrip(newTrip);
    handleCloseModal();
  };

  const handleDeleteTrip = (index) => {
    const updatedTrips = [...trips];
    updatedTrips.splice(index, 1);
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
  <li key={index}>
    <Link to={`/trip/${index}`}>
      <Trip key={index} trip={trip} onDelete={() => handleDeleteTrip(index)} setTrips={setTrips} />
    </Link>
  </li>
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

export default Home;
