import React from 'react';

function Notifications() {
  const overdue = [{ company: 'Company A', task: 'LinkedIn Message' }];
  const today = [{ company: 'Company B', task: 'Email' }];
  
  return (
    <div>
      <h2>Notifications</h2>
      <h3>Overdue Communications</h3>
      <ul>
        {overdue.map((item, index) => (
          <li key={index}>{item.company} - {item.task}</li>
        ))}
      </ul>
      <h3>Today's Communications</h3>
      <ul>
        {today.map((item, index) => (
          <li key={index}>{item.company} - {item.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
