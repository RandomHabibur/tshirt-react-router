import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

// https://github.com/ProgrammingHero1/t-shirt-data
const Main = () => {
    return (
        <div>
            <Header />
            <h2>This is main</h2>
            <Outlet />
        </div>
    );
};

export default Main;