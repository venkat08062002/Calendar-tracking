import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/User/Dashboard';
import CompanyManagement from './components/Admin/CompanyManagement';
import CommunicationMethodManagement from './components/Admin/CommunicationMethodManagement';
import Notifications from './components/User/Notifications';
import CalendarView from './components/User/CalendarView';
import Header from './components/Common/Header';
import Sidebar from './components/Common/Sidebar';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/admin/companies" element={<CompanyManagement/>} />
            <Route path="/admin/communication-methods" element={<CommunicationMethodManagement/>} />
            <Route path="/user/notifications" element={<Notifications/>} />
            <Route path="/user/calendar" element={<CalendarView/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
