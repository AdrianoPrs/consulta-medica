const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();

// Conectar ao MongoDB
connectDB();

// Middleware
app.use(express.json());

// Rotas
app.use("/api", userRoutes);
app.use("/api", appointmentRoutes);

// Porta de execução
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
