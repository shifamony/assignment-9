import React, { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
const QuizeContext = createContext([]);
const Main = () => {
    const safa = '';
    return (
        <div>
            <QuizeContext.Provider value={safa}>
            <Header></Header>
            <Outlet></Outlet>
            </QuizeContext.Provider>
        </div>
    );
};

export default Main;