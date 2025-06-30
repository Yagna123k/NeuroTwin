const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Create a new persona
router.post('/', async (req, res) => {
  const { userId, name, role, description } = req.body;
  try {
    const persona = await prisma.persona.create({
      data: { userId, name, role, description }
    });
    res.json(persona);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all personas for a user
router.get('/:userId', async (req, res) => {
  try {
    const personas = await prisma.persona.findMany({
      where: { userId: req.params.userId }
    });
    res.json(personas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
