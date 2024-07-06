const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CollaborativeSquareSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  tasks: [{ description: String, completed: Boolean }]
});

module.exports = mongoose.model('CollaborativeSquare', CollaborativeSquareSchema);
