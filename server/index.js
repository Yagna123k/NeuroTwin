const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { PrismaClient } = require('@prisma/client');

require('dotenv').config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
const userRoutes = require('./routes/userRoutes');
const personaRoutes = require('./routes/personaRoutes');

app.use('/api/users', userRoutes);
app.use('/api/personas', personaRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the NeuroTwin API');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});