const express = require('express');
const router = express.Router();

router.post('/user', (req, res, next) => {
    firstName = req.body.firstName;
    console.log(firstName);
    res.render(firstName + ', what a beautiful name!');
})

router.get('/user/:id', (req, res, next) => {
    let user = req.params.id;
    res.status(200).json({user: user});
})

module.exports = router;