const functions = require("firebase-functions");
const admin = require('firebase-admin');
const asyncHandler = require('express-async-handler');

const transaction = asyncHandler(async(req,res) => {

    await admin.firestore().runTransaction(async (t) => {
        const userA = await admin.firestore().collection('WalletAmt').doc(req.params.id);
        const docA = await t.get(userA);
        new_balanceA = docA.data().Amount - req.body.Amount;
        t.update(userA, {Amount: new_balanceA});
        const userB = await admin.firestore().collection('WalletAmt').doc(req.body.rid);
        const docB = await t.get(userB);
        new_balanceB = docB.data().Amount + req.body.Amount;
        t.update(userB, {Amount: new_balanceB});

    });
    res.status(200).send();
})


module.exports = transaction;