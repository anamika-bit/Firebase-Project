const express = require('express');
const router = express.Router();

const {
    createWallet,
    getWallet,
    updateWallet
} = require('../Controllers/walletAmtControllers');

router.post('/:id', createWallet);

router.get('/:id',getWallet);

router.put('/:id', updateWallet);


module.exports = router;