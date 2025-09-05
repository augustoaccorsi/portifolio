import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/index';
import Home from '../pages/Home/index';
import About from '../pages/About/index';
import TechStack from '../pages/TechStack/index';
// import Checkout from '../pages/Checkout/index';
const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/techStack" element={<TechStack />} />
                {/* <Route path="/checkout" element={<Checkout />} /> */}
            </Route>
        </Routes>
    );
};

export default Router;
