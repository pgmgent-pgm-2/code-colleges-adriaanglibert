const express = require('express');
const router = express.Router();
const {addUser} = require('../controllers/usersController');

router.get('/users', (request, response) => {
    response.json(users);
});

router.post('/users', addUser);

module.exports = router;