const express = require('express');
const router = express.Router();

const {
    createUser,
    getUserById,
    getUsers,
    updateUserDetails,
    deleteUser
} = require('../Controllers/userControllers');

router.post('/', createUser);

router.get('/:id',getUserById);

router.get('/', getUsers);

router.put('/:id', updateUserDetails);

router.delete('/:id', deleteUser);

module.exports = router;