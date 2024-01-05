import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';

const Logout = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    onClose();
  };

  return (
    <div className="logout-modal">
      <p>Are you sure you want to log out?</p>
      <button className={'mx-2'} onClick={handleLogout}>Logout</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default Logout;
