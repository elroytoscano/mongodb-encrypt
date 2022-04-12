const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
  email: {
    lowercase: true,
    required: true,
    type: String,
    unique: true,
  },
  employeeCode: {
    required: true,
    type: Number,
    unique: true,
  },
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model('Employee', EmployeeSchema);
