const express = require('express');
const User = require('../models/User');
const LeaveRequest = require('../models/LeaveRequest');
const Reimbursement = require('../models/Reimbursement');
const router = express.Router();
const bcrypt = require('bcrypt');

router.post('/create-user', async (req, res) => {
    const { username, password, role, ...otherDetails } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword, role, ...otherDetails });
    await user.save();
    res.send('User created successfully.');
});

router.get('/leave-requests', async (req, res) => {
    const requests = await LeaveRequest.find();
    res.send(requests);
});

router.get('/reimbursements', async (req, res) => {
    const reimbursements = await Reimbursement.find();
    res.send(reimbursements);
});


router.put('/requests/:id', async (req, res) => {
    const { status } = req.body;
    const updated = await LeaveRequest.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.send(updated);
});

module.exports = router;
