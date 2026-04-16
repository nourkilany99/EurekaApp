import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup'


const RoutingApp = () => {
    return ( 
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/Login' element={<Login />} />
                <Route path='/Signup' element={<Signup />} />
            </Routes>

        </BrowserRouter>
        
        
        
        
        </>
     );
}
 
export default RoutingApp;