import React from 'react';
import Header from '../components/Header.js'; // Corrected import path
import { Outlet } from 'react-router-dom'; // Corrected import path

const Dashboard = () => {
    return (
        <div>
            <Header/>
            <div>
                <Outlet/>
             </div>
        </div>
    )
}

export default Dashboard;
