import React from "react";

function AppointmentList({ appointments }) {
  return (
    <div className="appointment-list">
      <h2>Consultas Agendadas</h2>
      {appointments.length === 0 ? (
        <p>Não há consultas agendadas.</p>
      ) : (
        <ul>
          {appointments.map((appointment, index) => (
            <li key={index} className="appointment-item">
              <p><strong>Paciente:</strong> {appointment.patient}</p>
              <p><strong>Médico:</strong> {appointment.doctor}</p>
              <p><strong>Data:</strong> {appointment.date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AppointmentList;