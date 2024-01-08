import React from 'react';
import { Outlet } from 'react-router-dom';

const DiscoverPlaces = () => {
  return (
    <div>
      <h1 className='discover'>Discover</h1>
      {/* Add content for the Home page */}
      <Outlet />
    </div>
  );
};

export { DiscoverPlaces };