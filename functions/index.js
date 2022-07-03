const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const app = express();
admin.initializeApp();

app.use(express.json());

const userRoutes = require('./Routes/userRoutes');

const walletAmtRoutes = require('./Routes/walletAmtRoutes');

//const transactionRoutes = require('./Routes/transactionRoutes');


app.use('/users', userRoutes);

app.use('/walletAmt', walletAmtRoutes);

//app.use('/transaction', transactionRoutes);

exports.user = functions.https.onRequest(app); 
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
//exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
//});
