const express = require('express');
const router = express.Router();
const Skill = require('../models/db/Skill');

router.post('/skill', async (req, res) => {
    console.log(req.body);
    const skill = new Skill({
        name: req.body.name,
        from: req.body.from,
        to: req.body.to
    })

    try {
        const savedSkill = await skill.save();
        res.json(savedSkill);
    } catch (err) {
        res.json(err)
    };
})

router.get('/skill/:id', (req, res) => {
    let user = req.params.id;
    res.status(200).json({user: user});
})
router.get('/skills', (req, res) => {
    let user = req.params.id;
    res.status(200).json({user: user});
})

module.exports = router;