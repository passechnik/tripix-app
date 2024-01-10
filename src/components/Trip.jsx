import React from 'react';
import { FaTrash } from 'react-icons/fa';

const Trip = ({ trip, onDelete }) => {
  return (
    <li>
      {trip.name} - {trip.date}
      <button className="btn btn-danger btn-sm ml-2" onClick={onDelete}>
        <FaTrash />
      </button>
    </li>
  );
};

export default Trip;
