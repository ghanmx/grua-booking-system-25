import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Index from './pages/Index.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './components/Navbar.jsx';
import BookingForm from './pages/BookingForm.jsx';
import Confirmation from './pages/Confirmation.jsx';
import Payment from './pages/Payment.jsx'; // Import Payment component

function App() {
  const [towingRequests, setTowingRequests] = useState([]);

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:3000/sse/events');
    eventSource.onmessage = function (event) {
      const newTowingRequest = JSON.parse(event.data);
      setTowingRequests((prev) => [...prev, newTowingRequest]);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/booking" element={<BookingForm />} />
          <Route exact path="/confirmation" element={<Confirmation />} />
          <Route exact path="/payment" element={<Payment />} />
        </Routes>
      </Router>

      <div>
        <h1>Solicitudes de Grúa</h1>
        <ul>
          {towingRequests.map((request) => (
            <li key={request.id}>
              {request.pickupLocation} -&gt; {request.destinationLocation}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
