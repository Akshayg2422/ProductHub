import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import Logout from './Logout';

const LeftSideMenu = () => {
    const [sideNavWidth, setSideNavWidth] = useState(0);
    const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
    const user = useSelector(selectUser);

    const openNav = () => {
        setSideNavWidth(250);
    };

    const closeNav = () => {
        setSideNavWidth(0);
    };

    const openLogoutModal = () => {
        setLogoutModalOpen(true);
    };

    const closeLogoutModal = () => {
        setLogoutModalOpen(false);
    };

    return (
        <div>
            <div id="mySidenav" className="sidenav" style={{ width: `${sideNavWidth}px` }}>
                <div className={'d-flex justify-content-between mx-3'}>
                    <span className={'username'} onClick={openLogoutModal}>{user.name}</span>
                    <span className={'closebtn'} onClick={closeNav}>&times;</span>
                </div>
                <Link to="/">ProductList</Link>
                <Link to="/Profile">Profile</Link>
            </div>

            <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={openNav}>&#9776;</span>

            {isLogoutModalOpen &&
                <div className={'text-center'}>
                    <Logout onClose={closeLogoutModal} />
                </div>
            }
        </div>
    );
};

export default LeftSideMenu;
