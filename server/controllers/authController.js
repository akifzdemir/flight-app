const { registerService, loginService } = require("../services/authService");

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await loginService({ email, password });
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const register = async (req, res) => {
  const { email, password, name, surname } = req.body;
  try {
    const token = await registerService({ email, password, name, surname });
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  login,
  register,
};
