require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const hrRoutes = require('./routes/hrRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.DB_URL/*, { useNewUrlParser: true, useUnifiedTopology: true }*/);

app.use('/api/auth', authRoutes);
app.use('/api/hr', hrRoutes);
app.use('/api/employee', employeeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

/*const mongoose = require('mongoose');
const User = require('./models/User'); // Import the schema

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/emp')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Connection error:', err));

// Example: Creating a User
const createUser = async () => {
    const user = new User({
        username: 'vinitpatil',
        password: 'v@10003',
        role: 'Employee',
        name: 'Vinit Arun Patil',
        address: 'At :- Kasheli,Post-Klher,Tal-Bhiwandi,Dist-Thane-421302',
        grade: 'A',
        jobLocation: 'Thane',
        reportingManager: 'Mayuresh',
        joiningDate: new Date(),
    });

    try {
        const result = await user.save();
        console.log('User created:', result);
    } catch (error) {
        console.error('Error creating user:', error);
    }
};

createUser();
*/