import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';

const Trip = ({ trip, onDelete }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(trip.date));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(trip.date));
    }, 1000);

    return () => clearInterval(timer);
  }, [trip.date]);

  function calculateTimeLeft(tripDate) {
    const now = new Date().getTime();
    const tripTime = new Date(tripDate).getTime();
    const difference = tripTime - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <Card style={{ width: '18rem' }} className="mb-3">
      <Card.Body>
        <Card.Title>{trip.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{trip.date}</Card.Subtitle>
        <Card.Text>
          {timeLeft.days > 0 && `${timeLeft.days}d `}
          {timeLeft.hours > 0 && `${timeLeft.hours}h `}
          {timeLeft.minutes > 0 && `${timeLeft.minutes}m `}
          {timeLeft.seconds > 0 && `${timeLeft.seconds}s `}
          {timeLeft.days <= 0 && timeLeft.hours <= 0 && timeLeft.minutes <= 0 && timeLeft.seconds <= 0 && 'Your trip is now!'}
        </Card.Text>
        <button className="btn btn-danger" onClick={onDelete}>
          <FaTrash />
        </button>
      </Card.Body>
    </Card>
  );
};

export default Trip;
