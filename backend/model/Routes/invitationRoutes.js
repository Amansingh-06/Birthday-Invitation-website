const express = require('express');
const Invitation = require('../Recever'); // Assuming the Invitation schema is in 'models/Invitation.js'
const Invitation2=require('../NotComing')

const router = express.Router();

router.post('/yes', async (req, res) => {
    try {
        const newInvitation = new Invitation(req.body);
        await newInvitation.save();
        res.status(201).json({ message: 'Invitation created successfully', invitation: newInvitation });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
router.post('/no', async (req, res) => {
    try {
        const newInvitation = new Invitation2(req.body);
        await newInvitation.save();
        res.status(201).json({ message: 'Invitation created successfully', invitation: newInvitation });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;