const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const users = require('../data/users'); // Importa user data
const jwtSecret = 'your-secret-key';

exports.login = async(req, res) => {
  const { email, password } = req.body;

  const user = users.find(user => user.email === email);
  if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
  }

  const isValidPassword = await bcrypt.compare(password, user.passwordHash);
  if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ userId: user.id }, jwtSecret);
  res.json({ token });
};

exports.logout = async (req, res) => {
  const { email, password } = req.body;

  console.log("Logout realizado")
};
