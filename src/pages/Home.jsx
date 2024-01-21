import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Trip from '../components/Trip';

const Home = ({ trips, addTrip, setTrips }) => {
  const [showModal, setShowModal] = useState(false);
  const [tripName, setTripName] = useState('');
  const [tripDate, setTripDate] = useState('');
  const navigate = useNavigate();

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
      details: 'Additional details for the trip',
      id: Date.now(),
    };

    addTrip(newTrip);
    handleCloseModal();
  };

  useEffect(() => {
    // use useEffect to navigate after the component has rendered
    navigate('/');
  }, [navigate]); // dependency array ensures this effect runs only once after the initial render

  const handleDeleteTrip = (id) => {
    setTrips((prevTrips) => {
      const updatedTrips = prevTrips.filter((trip) => trip.id !== id);
      // navigate to the home page after deleting the trip
      navigate('/');
      return updatedTrips;
    });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <h2>My Trips</h2>
      <div className="trip-grid">
        {trips.length === 0 ? (
          <h4>You have no trips.</h4>
        ) : (
          trips.map((trip, index) => (
            <div key={index} className="trip-card">
              <Link to={`/trip/${index}`}>
                <Trip key={index} trip={trip} onDelete={() => handleDeleteTrip(index)} setTrips={setTrips} />
              </Link>
            </div>
          ))
        )}
      </div>


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
