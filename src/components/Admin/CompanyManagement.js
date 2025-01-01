import React, { useState } from 'react';

function CompanyManagement() {
  const [companies, setCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState({ name: '', location: '', linkedIn: '', email: '', phone: '', comments: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCompany({ ...newCompany, [name]: value });
  };

  const handleAddCompany = () => {
    setCompanies([...companies, newCompany]);
    setNewCompany({ name: '', location: '', linkedIn: '', email: '', phone: '', comments: '' });
  };

  return (
    <div>
      <h2>Company Management</h2>
      <input type="text" name="name" value={newCompany.name} onChange={handleInputChange} placeholder="Company Name" />
      <input type="text" name="location" value={newCompany.location} onChange={handleInputChange} placeholder="Location" />
      <input type="text" name="linkedIn" value={newCompany.linkedIn} onChange={handleInputChange} placeholder="LinkedIn Profile" />
      <input type="email" name="email" value={newCompany.email} onChange={handleInputChange} placeholder="Email" />
      <input type="tel" name="phone" value={newCompany.phone} onChange={handleInputChange} placeholder="Phone Number" />
      <textarea name="comments" value={newCompany.comments} onChange={handleInputChange} placeholder="Comments" />
      <button onClick={handleAddCompany}>Add Company</button>

      <ul>
        {companies.map((company, index) => (
          <li key={index}>
            {company.name} - {company.location}
            <button onClick={() => setCompanies(companies.filter((_, i) => i !== index))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyManagement;
