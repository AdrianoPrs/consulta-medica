import React, { useState } from "react";
import AppointmentForm from "./components/AppointmentForm";
import AppointmentList from "./components/AppointmentList";
import './styles.css';

function App() {
  const [appointments, setAppointments] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Agendamento de Consultas Médicas</h1>
      </header>
      
      <div className="appointment-container">
        <AppointmentForm setAppointments={setAppointments} />
        <AppointmentList appointments={appointments} />
      </div>
    </div>
  );
}

export default App;
