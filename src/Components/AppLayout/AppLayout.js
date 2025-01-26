import React from 'react';
import './AppLayout.css';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const AppLayout = () => {
    return (
        <>
            <Header />
            <div className="container-fluid applayout-container">
                <div className="row">
                    <div className="col-12">
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AppLayout;
