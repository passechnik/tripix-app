import React from 'react';
import { Outlet } from 'react-router-dom';

const SignOut = () => {
  return (
    <>
    <h1>Sign Out</h1>
    <Outlet />
    </>
  );
};

export default SignOut;