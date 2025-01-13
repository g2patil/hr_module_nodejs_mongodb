const express = require('express');
const LeaveRequest = require('../models/LeaveRequest');
const Reimbursement = require('../models/Reimbursement');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.post('/leave-request', async (req, res) => {
    const { employeeId, employeeName, startDate, endDate } = req.body;
    const leaveRequest = new LeaveRequest({ employeeId, employeeName, startDate, endDate });
    await leaveRequest.save();
    res.send('Leave request submitted.');
});

router.post('/reimbursement', upload.single('pdf'), async (req, res) => {
    const { employeeId, employeeName, description } = req.body;
    const reimbursement = new Reimbursement({
        employeeId,
        employeeName,
        description,
        pdfUrl: req.file.path,
    });
    await reimbursement.save();
    res.send('Reimbursement request submitted.');
});

router.get('/info/:id', async (req, res) => {
    const user = await User.findById(req.params.id).select('-password');
    res.send(user);
});

module.exports = router;
