import React from 'react';
import { Outlet } from 'react-router-dom';

const DiscoverPlaces = () => {
  return (
    <div>
      <h1 className='discover'>Discover</h1>
      
      <Outlet />
    </div>
  );
};

export default DiscoverPlaces;