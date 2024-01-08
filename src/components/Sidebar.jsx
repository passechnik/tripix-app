import React from 'react';
import { Link } from 'react-router-dom';

 const Sidebar = () => {
    return(
        <div className="sidebar">
            <Link to='/'>Home</Link>
            <Link to='/discover'>Discover Places</Link>
            <Link to='/settings'>Settings</Link>
            <Link to='/signout'>Sign Out</Link>
        </div>
    )
 }

 export { Sidebar }