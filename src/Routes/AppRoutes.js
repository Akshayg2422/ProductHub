import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from '../Components/ProductList';
import Profile from '../Components/Profile';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<ProductList />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='*' element={<h1>No data Found</h1>} />
        </Routes>
    );
};

export default AppRoutes;
