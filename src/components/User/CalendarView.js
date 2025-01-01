import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// Import CSS for calendar styling

function CalendarView() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Calendar View</h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileClassName="custom-tile" // Optional: Add custom styles to calendar tiles
      />
      <div style={{ marginTop: '20px' }}>
        <p>Selected Date: {date.toDateString()}</p>
      </div>
    </div>
  );
}

export default CalendarView;

