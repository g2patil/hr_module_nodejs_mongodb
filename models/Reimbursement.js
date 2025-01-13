const mongoose = require('mongoose');
const reimbursementSchema = new mongoose.Schema({
    employeeId: mongoose.Schema.Types.ObjectId,
    employeeName: String,
    description: String,
    pdfUrl: String,
    status: { type: String, enum: ['Pending', 'Accepted', 'Rejected'], default: 'Pending' },
});

module.exports = mongoose.model('Reimbursement', reimbursementSchema);
