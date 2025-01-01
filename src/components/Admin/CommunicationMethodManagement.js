import React, { useState } from 'react';

function CommunicationMethodManagement() {
  const [methods, setMethods] = useState([
    { name: 'LinkedIn Post', description: 'Post on LinkedIn', sequence: 1 },
    { name: 'LinkedIn Message', description: 'Message on LinkedIn', sequence: 2 },
    { name: 'Email', description: 'Send Email', sequence: 3 },
    { name: 'Phone Call', description: 'Call via Phone', sequence: 4 },
    { name: 'Other', description: 'Other Communication', sequence: 5 },
  ]);

  const handleAddMethod = (method) => {
    setMethods([...methods, method]);
  };

  return (
    <div>
      <h2>Communication Method Management</h2>
      <button onClick={() => handleAddMethod({ name: 'Message', description: 'Text Message', sequence: 6 })}>
        Add Method
      </button>
      <ul>
        {methods.map((method, index) => (
          <li key={index}>
            {method.name} - {method.description} (Sequence: {method.sequence})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommunicationMethodManagement;
