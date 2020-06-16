const express = require('express');
const router = express.Router();
const Skill = require('../models/db/Skill');


router.get('/find-all-skills', async (req, res) => {
    try {
        const skills = await Skill.find();
        res.json(skills)
    } catch (err) {
        res.json({err: err})
    }
})

router.get('/skills', async (req, res) => {
    try {
        filterBy = req.query.filterBy;
        filterBy = req.query.filterBy;
        const skills = await Skill.find()
        res.json(skills)
    } catch (err) {
        res.json({err: err})
    }
})

router.delete('/skills/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const skill = await Skill.remove({_id: id});
        res.json(skill);
    } catch (err) {
        res.json({err: err})
    }
})

router.patch('/skills', async (req, res) => {
    try {
        const skill = req.body;
        const task = await Skill.updateOne({_id: skill.id}, {$set: skill});
        res.json(task);
    } catch (err) {
        res.json({err: err})
    }
})

router.post('/skills', async (req, res) => {
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
        res.json({err: err})
    };
})
module.exports = router;