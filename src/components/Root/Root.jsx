import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

import Footer from '../footer/Footer';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Root = () => {
    const {checked} = useContext(AuthContext)
    const location = useLocation()
    
    return (
        <div data-theme={location.pathname === '/' && !checked ? "dark" : "light"}>  
            <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;