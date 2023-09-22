const express = require('express')
const userSchema = require('../models/UserSchema')


module.exports = {

    getAllUsers: async function (req, res,){
        const allUser = await userSchema.find({});
        res.send(allUser)
    },
    addUser: async function (req, res) {
        console.log(req.body);
        const insertUserData = new userSchema(req.body);
        const user = await insertUserData.save()
        res.send(user);

    },

    getUser: async function (req, res) {
        id = req.params.id
        const user = await userSchema.findOne({_id: id});
        console.log(user);
        res.send(user);
    },

    updateUser: async function (req, res) {
        _id = req.params.id
        const getdata = await userSchema.findByIdAndUpdate(_id, req.body, {
            new:true
        })
        res.send(getdata);
    },

    deleteUser: async function (req, res) {
        _id = req.params.id
        const deleteUser = await userSchema.findByIdAndDelete({_id:_id})
        res.send(deleteUser)
    }

}