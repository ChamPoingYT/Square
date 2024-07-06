const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config');

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({ username, email, password });
  await newUser.save();
  res.send('User registered successfully');
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (user) {
    const token = jwt.sign({ id: user._id }, config.jwtSecret);
    res.json({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
};
