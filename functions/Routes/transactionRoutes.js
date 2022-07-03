const express = require('express');
const router = express.Router();

const {
    transaction
} = require('../Controllers/transactionControllers');


router.put('/:id', transaction);


module.exports = router;