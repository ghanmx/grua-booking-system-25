// src/components/BookingStatus.jsx
import React, { useEffect, useState } from 'react';

const BookingStatus = () => {
  const [status, setStatus] = useState('Pending');

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:3000/events/sse');

    eventSource.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setStatus(newData.status);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div>
      <h1>Booking Status: {status}</h1>
    </div>
  );
};

export default BookingStatus;
