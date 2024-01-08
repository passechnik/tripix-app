import React from 'react';
import { Outlet } from 'react-router-dom';

const Settings = () => {
  return (
   <>
   <h1>Settings</h1>
   <Outlet />
   </>
  );
};

export { Settings };