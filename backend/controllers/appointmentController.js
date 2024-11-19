const Appointment = require("../models/Appointment");

const createAppointment = async (req, res) => {
  try {
    const { patientId, doctorId, appointmentDate } = req.body;
    const newAppointment = new Appointment({ patientId, doctorId, appointmentDate });
    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(400).json({ message: "Erro ao agendar consulta", error });
  }
};

module.exports = { createAppointment };
