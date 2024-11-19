import React, { useState } from "react";
import axios from "axios";

function AppointmentForm({ setAppointments }) {
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [patient, setPatient] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Adiciona o novo agendamento à lista
    setAppointments((prevAppointments) => [
      ...prevAppointments,
      { doctor, date, patient }
    ]);
    // Limpa os campos após o envio
    setDoctor('');
    setDate('');
    setPatient('');
  };

  return (
    <form onSubmit={handleSubmit} className="appointment-form">
      <h2>Agendar Consulta</h2>
      <div className="form-field">
        <label>Nome do Paciente</label>
        <input
          type="text"
          value={patient}
          onChange={(e) => setPatient(e.target.value)}
          placeholder="Nome do paciente"
          required
        />
      </div>
      <div className="form-field">
        <label>Nome do Médico</label>
        <input
          type="text"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
          placeholder="Nome do médico"
          required
        />
      </div>
      <div className="form-field">
        <label>Data da Consulta</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn-submit">Agendar</button>
    </form>
  );
}

export default AppointmentForm;
