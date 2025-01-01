import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/admin/companies">Company Management</Link></li>
        <li><Link to="/admin/communication-methods">Communication Method Management</Link></li>
        <li><Link to="/user/notifications">Notifications</Link></li>
        <li><Link to="/user/calendar">Calendar</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;
