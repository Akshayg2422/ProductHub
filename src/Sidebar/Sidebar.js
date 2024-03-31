import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../features/userSlice';
import AppRoutes from '../Routes/AppRoutes';
import '../Sidebar/Sidebar.css';
import { FirstLetterToUpperCase } from '../CommonMethods';

const Sidebar = () => {
    const [isClosed, setIsClosed] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    const toggleSidebar = () => {
        setIsClosed(!isClosed);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div id="wrapper" className={isClosed ? 'toggled' : ''}>
            <div className="overlay"></div>

            <nav className="navbar navbar-inverse fixed-top" id="sidebar-wrapper" role="navigation">
                <ul className="nav sidebar-nav">
                    <div className="sidebar-header">
                        <div className="sidebar-brand">
                            <span className={'text-white'}>{FirstLetterToUpperCase(user.name)}</span>
                        </div>
                    </div>
                    <li><Link to="/">ProductList</Link></li>
                    <li><Link to="/Profile">Profile</Link></li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" style={{ cursor: 'pointer' }} onClick={toggleDropdown}>Logout <span className="caret"></span></a>
                        <ul className={`dropdown-menu animated fadeInLeft ${isDropdownOpen ? 'show' : ''}`} role="menu">
                            <li><a href="#" onClick={handleLogout}>Yes</a></li>
                            <li><a href="#" onClick={toggleDropdown}>No</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <div id="page-content-wrapper">
                <button type="button" className={`hamburger animated fadeInLeft ${isClosed ? 'is-open' : 'is-closed'}`} onClick={toggleSidebar}>
                    <span className="hamb-top"></span>
                    <span className="hamb-middle"></span>
                    <span className="hamb-bottom"></span>
                </button>
                <div className="container">
                    <div className="row">
                        <div style={{ overflowX: 'auto' }} className={`${isClosed ? 'col-lg-10 col-lg-offset-2' : 'col-lg-12 col-lg-offset-2'}`}>
                            <AppRoutes />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Sidebar;
