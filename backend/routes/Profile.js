const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req,res) => {
    const {email} = req.body;

    console.log("Profile request for email:", email);

    if(!email) {
        return res.status(400).json({error: "Email is required"});
    }

    try {
        const user = await User.findOne({email});

        if(!user) {
            return res.status(404).json({ message: "User not found"});
        }

        res.json ({
            name: user.name,
            email: user.email
        });
    } catch (error) {
        console.error("Error fetching Profile:",error);
        res.status(500).json({ message: "Internal server error"});
    }
}) 

module.exports = router;
