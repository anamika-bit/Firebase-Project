const functions = require("firebase-functions");
const admin = require('firebase-admin');
const asyncHandler = require('express-async-handler');

const createUser = asyncHandler(async(req,res) => {
    const user = await admin.firestore().collection('User').add({
        country_code : req.body.country_code,
        Name : req.body.Name,
        Phone : req.body.Phone
    });
    res.json(user);
})

const getUserById = asyncHandler(async(req,res) => {
    const snapshot = await admin.firestore().collection('User').doc(req.params.id).get();

    const userId = snapshot.id;
    const userData = snapshot.data();
    res.status(200).send(JSON.stringify({ id : userId, ...userData}));
})

const getUsers = asyncHandler(async(req,res) => {
    const snapshot = await admin.firestore().collection('User').get();

    let users = [];
    snapshot.forEach( doc => {
        let id = doc.id;
        let data = doc.data();
        users.push(id, ...data);
    });
    res.status(200).send(JSON.stringify(users));
})

const updateUserDetails = asyncHandler(async(req,res) => {
    const body = req.body;

    await admin.firestore().collection('User').doc(req.params.id).update({
        ...body
    });

    res.status(200).send();
})

const deleteUser = asyncHandler(async(req,res) => {
    await admin.firestore().collection('User').doc(req.params.id).delete();

    res.status(200).send();
})

module.exports = {
    createUser,
    getUserById,
    getUsers,
    updateUserDetails,
    deleteUser
};
