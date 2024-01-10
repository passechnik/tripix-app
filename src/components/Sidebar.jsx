import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu, IoHome, IoPlanet, IoPerson } from 'react-icons/io5';
import { CiSettings } from "react-icons/ci";

const Sidebar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    let iconStyles = { color: 'red', fontSize: '1.5em'}

    return (
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <div className="toggle-button" onClick={toggleSidebar}>
                <IoMenu className='toggle-icon' />
            </div>

            {isSidebarOpen ? (
                <>
                    <Link to='/'><IoHome style={iconStyles}/> Home</Link>
                    <Link to='/discover'><IoPlanet style={iconStyles} /> Discover</Link>
                    <Link to='/settings'><CiSettings style={iconStyles}/> Settings</Link>
                    <Link to='/signout'><IoPerson style={iconStyles}/> Sign Out</Link>
                </>
            ) : (
                <>
                    <Link to='/'><IoHome /></Link>
                    <Link to='/discover'><IoPlanet /></Link>
                    <Link to='/settings'><CiSettings /></Link>
                    <Link to='/signout'><IoPerson /></Link>

                </>
            )}
        </div>
    );
};

export { Sidebar };
