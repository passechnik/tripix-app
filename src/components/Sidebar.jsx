import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";

const Sidebar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <div className="toggle-button" onClick={toggleSidebar}>
            <IoMenu className='toggle-icon'/>
            </div>
            <Link to='/'>Home</Link>
            <Link to='/discover'>Discover Places</Link>
            <Link to='/settings'>Settings</Link>
            <Link to='/signout'>Sign Out</Link>
        </div>
    );
};

export { Sidebar };
