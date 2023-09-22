const express = require('express')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
       name: {
        type: String,
        required: true
       },
       contact_number:{
        type: Number,
        required: true
       },

       email:{
        type: String,
        required: true
       },

       address: {
        type: String,
        required: true
       }

})

const userSchema = mongoose.model('User',UserSchema)

module.exports = userSchema