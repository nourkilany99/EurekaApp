import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';


const RoutingApp = () => {
    return ( 
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/Login' element={<Login />} />

            </Routes>

        </BrowserRouter>
        
        
        
        
        </>
     );
}
 
export default RoutingApp;