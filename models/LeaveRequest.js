const mongoose = require('mongoose');
const leaveRequestSchema = new mongoose.Schema({
    employeeId: mongoose.Schema.Types.ObjectId,
    employeeName: String,
    startDate: Date,
    endDate: Date,
    status: { type: String, enum: ['Pending', 'Accepted', 'Rejected'], default: 'Pending' },
});

module.exports = mongoose.model('LeaveRequest', leaveRequestSchema);
