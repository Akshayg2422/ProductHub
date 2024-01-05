import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice';

const LeftSideMenu = () => {
    const [sideNavWidth, setSideNavWidth] = useState(0);
    const user = useSelector(selectUser)

    const openNav = () => {
        setSideNavWidth(250);
    };

    const closeNav = () => {
        setSideNavWidth(0);
    };

    return (
        <div>
            <div id="mySidenav" className="sidenav" style={{ width: `${sideNavWidth}px` }}>
                <a className="closebtn" onClick={closeNav}>{user.name}&times;</a>
                <Link to="/ProductList">ProductList</Link>
                <Link to="/Profile">Profile</Link>
            </div>

            <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={openNav}>&#9776;</span>
        </div>
    );
};

export default LeftSideMenu;
