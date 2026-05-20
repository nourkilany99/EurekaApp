import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
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
import PaymentSetup from './pages/PaymentSetup';
import EditProfile from './pages/EditProfile';
import BottomNav from './components/BottomNav';
import PaymentPage from './pages/PaymentPage';
import SettingsPage from './pages/SettingsPage';
import SupportPage from './pages/SupportPage';
import RatingsPage from './pages/RatingsPage';
import TasksPage from './pages/TasksPage';
import MessagesPage from './pages/MessagesPage';
import ChatPage from './pages/ChatPage';
import ProfilePage from './pages/ProfilePage';
import ReportsPage from './pages/ReportsPage';
import SafetyPage from './pages/SafetyPage';
import AchievementsPage from './pages/AchievementsPage';
import PortfolioPage from './pages/PortfolioPage';
import AvailabilityPage from './pages/AvailabilityPage';
import PrivacyPage from './pages/PrivacyPage';
import ThemePage from './pages/ThemePage';
import ReferralPage from './pages/ReferralPage';
import LeaderboardPage from './pages/LeaderboardPage';
import AiMatchPage from './pages/AiMatchPage';
import ArPreviewPage from './pages/ArPreviewPage';
import SmartPricingPage from './pages/SmartPricingPage';
import PromoCodesPage from './pages/PromoCodesPage';
import CallPage from './pages/CallPage';
import ReportUserPage from './pages/ReportUserPage';
import DisputeCenterPage from './pages/DisputeCenterPage';
import BackgroundCheckPage from './pages/BackgroundCheckPage';
import NewHome from './pages/NewHome';

const ConditionalBottomNav = () => {
    const location = useLocation();
    const hideBottomNav = location.pathname === "/" || location.pathname === "/splash" || location.pathname === "/Signup" || location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/learn-more";

    return (
        <>
            {!hideBottomNav && <BottomNav />}
        </>
    );
};

const AppWrapper = ({ children }) => {
    const location = useLocation();
    const isProfilePage = location.pathname === "/profile";
    const isSigninPage = location.pathname === "/";

    return (
        <div className={`app-container ${isProfilePage || isSigninPage ? 'no-margin' : ''}`}>
            {children}
        </div>
    );
};

const RoutingApp = () => {
    return (
        <>
            <BrowserRouter>
                <AppWrapper>
                    <Routes>
                        {/* Splash is the entry point; "/" is login */}
                        <Route path="/splash" element={<SplashScreen />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/" element={<Login />} />
                        <Route path="/Signup" element={<Signup />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/skills-2" element={<Skills2 />} />
                        <Route path="/notifications" element={<Notifications />} />
                        <Route path="/wallet" element={<Wallet />} />
                        <Route path="/calender" element={<Calender />} />
                        <Route path="/my-tasks" element={<MyTasks />} />
                        <Route path="/requests/details" element={<RequestsDetails />} />
                        <Route path="/apply-for-the-task" element={<ApplyForTheTask />} />
                        <Route path="/requests" element={<Requests />} />
                        <Route path="/jobs-on-maps" element={<JobsOnMaps />} />
                        <Route path="/feed" element={<Feed />} />
                        <Route path="/volunteer" element={<Volunteer />} />
                        <Route path="/learn-more" element={<LearnMore />} />
                        <Route path="/maps-open" element={<MapsOpen />} />
                        <Route path="/help-support" element={<HelpSupport />} />
                        <Route path="/reviews-ratings" element={<ReviewsRatings />} />
                        <Route path="/task-history" element={<TaskHistory />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/tasks" element={<TasksPage />} />
                        <Route path="/messages" element={<MessagesPage />} />
                        <Route path="/chat" element={<ChatPage />} />
                        <Route path="/payment-setup" element={<PaymentSetup />} />
                        <Route path="/edit-profile" element={<EditProfile />} />
                        <Route path="/settings" element={<SettingsPage />} />
                        <Route path="/payment" element={<PaymentPage />} />
                        <Route path="/support" element={<SupportPage />} />
                        <Route path="/reports" element={<ReportsPage />} />
                        <Route path="/safety" element={<SafetyPage />} />
                        <Route path="/achievements" element={<AchievementsPage />} />
                        <Route path="/portfolio" element={<PortfolioPage />} />
                        <Route path="/availability" element={<AvailabilityPage />} />
                        <Route path="/privacy" element={<PrivacyPage />} />
                        <Route path="/theme" element={<ThemePage />} />
                        <Route path="/referral" element={<ReferralPage />} />
                        <Route path="/leaderboard" element={<LeaderboardPage />} />
                        <Route path="/ai-match" element={<AiMatchPage />} />
                        <Route path="/ar-preview" element={<ArPreviewPage />} />
                        <Route path="/smart-pricing" element={<SmartPricingPage />} />
                        <Route path="/promo-codes" element={<PromoCodesPage />} />
                        <Route path="/call" element={<CallPage />} />
                        <Route path="/report-user" element={<ReportUserPage />} />
                        <Route path="/dispute-center" element={<DisputeCenterPage />} />
                        <Route path="/background-check" element={<BackgroundCheckPage />} />
                        <Route path="/new-home" element={<NewHome />} />
                    </Routes>
                    <ConditionalBottomNav />
                </AppWrapper>
            </BrowserRouter>
        </>
    );
};

export default RoutingApp;
