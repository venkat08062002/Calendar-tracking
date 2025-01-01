import React, { useState } from 'react';

function CommunicationAction({ companies, onUpdate }) {
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [communicationType, setCommunicationType] = useState('');
  const [communicationDate, setCommunicationDate] = useState('');
  const [notes, setNotes] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleCompanySelection = (company) => {
    setSelectedCompanies((prevSelected) => {
      if (prevSelected.includes(company)) {
        return prevSelected.filter((item) => item !== company);
      } else {
        return [...prevSelected, company];
      }
    });
  };

  const handleSubmit = () => {
    if (selectedCompanies.length === 0 || !communicationType || !communicationDate) {
      alert('Please select companies, communication type, and date.');
      return;
    }

    // Reset highlights for the selected companies
    onUpdate(selectedCompanies);

    // Handle communication logging (you can implement actual API call here)
    console.log('Communication Logged:', {
      companies: selectedCompanies,
      communicationType,
      communicationDate,
      notes,
    });

    // Reset form state
    setSelectedCompanies([]);
    setCommunicationType('');
    setCommunicationDate('');
    setNotes('');
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Log Communication</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={() => setShowModal(false)}>Close</button>

            <h3>Select Companies</h3>
            {companies.map((company, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  id={`company-${company.name}`}
                  checked={selectedCompanies.includes(company.name)}
                  onChange={() => handleCompanySelection(company.name)}
                />
                <label htmlFor={`company-${company.name}`}>{company.name}</label>
              </div>
            ))}

            <h3>Communication Type</h3>
            <select value={communicationType} onChange={(e) => setCommunicationType(e.target.value)}>
              <option value="">Select Communication Type</option>
              <option value="LinkedIn Post">LinkedIn Post</option>
              <option value="LinkedIn Message">LinkedIn Message</option>
              <option value="Email">Email</option>
              <option value="Phone Call">Phone Call</option>
              <option value="Other">Other</option>
            </select>

            <h3>Communication Date</h3>
            <input
              type="date"
              value={communicationDate}
              onChange={(e) => setCommunicationDate(e.target.value)}
            />

            <h3>Notes</h3>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add any additional notes"
            ></textarea>

            <button onClick={handleSubmit}>Log Communication</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CommunicationAction;
