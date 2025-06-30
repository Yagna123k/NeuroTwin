const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Create user
router.post('/', async (req, res) => {
    const { clerk_id, email, full_name } = req.body;
    try {
        const { clerk_id, email, full_name } = req.body;
        const user = await prisma.user.create({
            data: { clerk_id, email, full_name }
        });
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;