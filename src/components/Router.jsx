import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollLayout from './ScrollLayout/index';

const Router = () => {
    return (
        <Routes>
            <Route path="/*" element={<ScrollLayout />} />
        </Routes>
    );
};

export default Router;
