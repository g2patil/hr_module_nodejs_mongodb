const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: { type: String, enum: ['HR', 'Employee'], required: true },
    name: String,
    address: String,
    grade: String,
    jobLocation: String,
    reportingManager: String,
    joiningDate: Date,
    leaveBalance: { type: Number, default: 10 }, // Casual Leave
});

module.exports = mongoose.model('User', userSchema);