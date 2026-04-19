import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Skills from './pages/Skills';
import Skills2 from './pages/Skills 2';
import Notifications from './pages/Notifications';
import Wallet from './pages/wallet';
import Calender from './pages/Calender';
import MyTasks from './pages/my Tasks';
import RequestsDetails from './pages/Requests details';
import ApplyForTheTask from './pages/APPLY FOR THE task';
import Requests from './pages/Requests';

const RoutingApp = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Signup" element={<Signup />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/skills-2" element={<Skills2 />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/wallet" element={<Wallet />} />
                    <Route path="/calender" element={<Calender />} />
                    <Route path="/my-tasks" element={<MyTasks />} />
                    <Route path="/requests/details" element={<RequestsDetails />} />
                    <Route path="/apply-for-the-task" element={<ApplyForTheTask />} />
                    <Route path="/requests" element={<Requests />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default RoutingApp;
