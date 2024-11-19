const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const { name, email, role } = req.body;
    const newUser = new User({ name, email, role });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: "Erro ao criar usuário", error });
  }
};

module.exports = { createUser };
