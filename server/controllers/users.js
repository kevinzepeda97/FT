const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const users = require('../models/Users');


//all members
router.get('/', (req, res) => res.json(users));

//single member
router.get('/:id', (req, res) => {
const found = users.some(user => user.id === parseInt(req.params.id));

if(found){
    res.json(users.filter(user => user.id === parseInt(req.params.id)));
} else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}`});
}
});

//create member
router.post('/', (req, res) => {
    const newUser = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        milesRan: 0,
        steps: 0,
        caloriesBurnt: 0
    }

    if(!newUser.name || !newUser.email || !newUser.password){
        return res.status(400).json({ msg: 'Please include a name, email and password'});
    }

    users.push(newUser);
    res.json(users);
});

//update member
router.put('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));
    
    if(found){
        const updUser = req.body;
        users.forEach(user => {
            if(user.id === parseInt(req.params.id)) {
                user.name = updUser.name ? updUser.name : user.name;
                user.email = updUser.email ? updUser.email : user.email;
                user.password = updUser.password ? updUser.password : user.password;

                res.json({ msg: 'Member updated', member: user})
            }
        })
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}`});
    }
    });

//delete member
router.delete('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));
    
    if(found){
        res.json({
            msg: 'User deleted',
            users: users.filter(user => user.id !== parseInt(req.params.id))
        });
    } else {
        res.status(400).json({ msg: `No user with the id of ${req.params.id}`});
    }
    });


module.exports = router;