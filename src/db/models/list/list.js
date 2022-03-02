const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskScheme = new Schema({
  name: String,
  isChecked: Boolean
});

module.exports = Task = mongoose.model('tasks', taskScheme);