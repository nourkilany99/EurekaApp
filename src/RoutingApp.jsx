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
import AccountUnderReview from './pages/AccountUnderReview';
import JobsOnMaps from './pages/JobsOnMaps';
import Feed from './pages/Feed';
import Volunteer from './pages/Volunteer';
import LearnMore from './pages/Learn more';
import MapsOpen from './pages/maps open';
import Volenteer from './pages/Volenteer';
import HelpSupport from './pages/HelpSupport';
import ReviewsRatings from './pages/ReviewsRatings';
import TaskHistory from './pages/TaskHistory';
import Search from './pages/Search';
import Messages from './pages/Messages';
import Chat from './pages/Chat';
import PaymentSetup from './pages/PaymentSetup';
import EditProfile from './pages/EditProfile';
import Settings from './pages/Settings';
import BottomNav from './Components/BottomNav';

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
                    <Route path="/account-under-review" element={<AccountUnderReview />} />
                    <Route path="/jobs-on-maps" element={<JobsOnMaps />} />
                    <Route path="/feed" element={<Feed />} />
                    <Route path="/volunteer" element={<Volunteer />} />
                    <Route path="/learn-more" element={<LearnMore />} />
                    <Route path="/maps-open" element={<MapsOpen />} />
                    <Route path="/volenteer" element={<Volenteer />} />
                    <Route path="/help-support" element={<HelpSupport />} />
                    <Route path="/reviews-ratings" element={<ReviewsRatings />} />
                    <Route path="/task-history" element={<TaskHistory />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/payment-setup" element={<PaymentSetup />} />
                    <Route path="/edit-profile" element={<EditProfile />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
                <BottomNav />
            </BrowserRouter>
        </>
    );
};

export default RoutingApp;
