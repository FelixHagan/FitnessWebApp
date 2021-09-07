const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'Welcome to the FitnessApp API...'}));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/running', require('./routes/running'));
app.use('/api/workouts', require('./routes/workouts'));
app.use('/api/coach', require('./routes/coach'));
app.use('/api/forum', require('./routes/forum'));
app.use('/api/messageCoach', require('./routes/messageCoach'));
app.use('/api/adminCoach', require('./routes/adminCoach'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
