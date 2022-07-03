const functions = require("firebase-functions");
const admin = require('firebase-admin');
const asyncHandler = require('express-async-handler');


const createWallet = asyncHandler(async(req,res) => {
    const data = {
        Amount : 0,
        Currency : req.body.Currency
    }
    const walletAmt = await admin.firestore().collection('WalletAmt').doc(req.params.id).set(data);
    res.json(walletAmt);
})

const getWallet = asyncHandler(async(req,res) => {
    const snapshot = await admin.firestore().collection('WalletAmt').doc(req.params.id).get();

    const cid = snapshot.id;
    const walletAmt = snapshot.data();
    res.status(200).send(JSON.stringify({ id : cid, ...walletAmt}));
})

const updateWallet = asyncHandler(async(req,res) => {
    
    const doc = await admin.firestore().collection('WalletAmt').doc(req.params.id).get();
    const new_balance = doc.data().Amount + req.body.Amount;
    const result = await doc.update({
        Amount : new_balance
    });

    res.status(200).send();
})


module.exports = {
    createWallet,
    getWallet,
    updateWallet
};