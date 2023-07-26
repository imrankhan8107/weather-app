import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import '../styles/Calender.css';

function CalendarComponent() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="CalenderPage">
      <h2>Calendar</h2>
      <Calendar value={selectedDate} onChange={handleDateChange} className="calender" />
    </div>
  );
}

export default CalendarComponent;
