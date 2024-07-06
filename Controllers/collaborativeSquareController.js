const CollaborativeSquare = require('../models/CollaborativeSquare');

exports.createSquare = async (req, res) => {
  const { name, description, members } = req.body;
  const newSquare = new CollaborativeSquare({ name, description, members });
  await newSquare.save();
  res.send('Collaborative Square created successfully');
};

exports.getSquares = async (req, res) => {
  const squares = await CollaborativeSquare.find().populate('members');
  res.json(squares);
};
