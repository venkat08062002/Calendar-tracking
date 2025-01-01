import React, { useState, useEffect } from 'react';
import CommunicationAction from './CommunicationAction';

function Dashboard() {
  const [companies, setCompanies] = useState([
    { 
      name: 'Company A', 
      lastCommunications: [
        { type: 'LinkedIn Post', date: '2023-09-05' },  // Use a valid date format
        { type: 'Email', date: '2023-08-20' }
      ], 
      nextCommunication: { type: 'Email', date: '2024-01-10' },
      overdue: false,
      dueToday: false
    },
    { 
      name: 'Company B', 
      lastCommunications: [
        { type: 'Phone Call', date: '2024-01-01' },
        { type: 'LinkedIn Message', date: '2023-12-15' }
      ], 
      nextCommunication: { type: 'LinkedIn Post', date: '2024-01-10' },
      overdue: false,
      dueToday: true
    },
    // Add more companies here
  ]);

  // Logic to determine overdue or due today communications
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
    const updatedCompanies = companies.map(company => {
      const nextCommDate = new Date(company.nextCommunication.date);

      // Ensure the date is valid
      if (isNaN(nextCommDate.getTime())) {
        console.error('Invalid date:', company.nextCommunication.date);
        return company; // Skip invalid date
      }

      const isOverdue = nextCommDate < new Date(today);
      const isDueToday = nextCommDate.toISOString().split('T')[0] === today;

      return {
        ...company,
        overdue: isOverdue,
        dueToday: isDueToday
      };
    });
    setCompanies(updatedCompanies);
  }, [companies]);

  // Handle updates after communication is logged
  const handleCommunicationUpdate = (updatedCompanies) => {
    // For simplicity, we log the updated companies, but in a real application, you can make API calls
    console.log('Updated companies after communication:', updatedCompanies);
  };

  return (
    <div>
      <h2>Dashboard</h2>

      {/* Communication action component */}
      <CommunicationAction companies={companies} onUpdate={handleCommunicationUpdate} />

      {/* Notification Grids */}
      <h3>Notifications</h3>
      
      {/* Overdue communications */}
      <div>
        <h4>Overdue Communications</h4>
        <ul>
          {companies.filter(company => company.overdue).map((company, index) => (
            <li key={index} style={{ color: 'red' }}>
              {company.name} - Next Communication: {company.nextCommunication.type} on {company.nextCommunication.date}
            </li>
          ))}
        </ul>
      </div>

      {/* Today's communications */}
      <div>
        <h4>Today's Communications</h4>
        <ul>
          {companies.filter(company => company.dueToday).map((company, index) => (
            <li key={index} style={{ color: 'yellow' }}>
              {company.name} - Next Communication: {company.nextCommunication.type} today
            </li>
          ))}
        </ul>
      </div>

      {/* Companies Table */}
      <h3>Companies</h3>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Last 5 Communications</th>
            <th>Next Scheduled Communication</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={index} style={{ backgroundColor: company.dueToday ? 'yellow' : company.overdue ? 'red' : '' }}>
              <td>{company.name}</td>
              <td>
                {company.lastCommunications.slice(0, 5).map((comm, idx) => (
                  <div key={idx}>{comm.type} - {comm.date}</div>
                ))}
              </td>
              <td>{company.nextCommunication.type} - {company.nextCommunication.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
