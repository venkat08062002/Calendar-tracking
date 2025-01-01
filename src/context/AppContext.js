import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the AppContext to hold global state
const AppContext = createContext();

// Provider component to wrap the application and provide global state
export const AppProvider = ({ children }) => {
  const [companies, setCompanies] = useState([
    { 
      name: 'Company A', 
      lastCommunications: [
        { type: 'LinkedIn Post', date: '5th Sept' },
        { type: 'Email', date: '20th Aug' }
      ], 
      nextCommunication: { type: 'Email', date: '10th Jan' },
      overdue: false,
      dueToday: false
    },
    { 
      name: 'Company B', 
      lastCommunications: [
        { type: 'Phone Call', date: '1st Jan' },
        { type: 'LinkedIn Message', date: '15th Dec' }
      ], 
      nextCommunication: { type: 'LinkedIn Post', date: '10th Jan' },
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

  // Function to update communication data for selected companies
  const updateCommunicationData = (selectedCompanies) => {
    const updatedCompanies = companies.map(company => {
      if (selectedCompanies.includes(company.name)) {
        return { ...company, overdue: false, dueToday: false }; // Reset overdue/dueToday flags
      }
      return company;
    });
    setCompanies(updatedCompanies);
  };

  return (
    <AppContext.Provider value={{ companies, setCompanies, updateCommunicationData }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
export const useAppContext = () => useContext(AppContext);
