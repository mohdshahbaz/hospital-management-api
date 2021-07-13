'use strict';
// Import mongoose
    const mongoose = require("mongoose");

// Declare schema and assign Schema class
    const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
    const patientSchema = new Schema({
        name: {
            type:String,
            required:true
        },
        age: {
            type:Number,
            required:true
        },
        address: {
            type:String,
            required:true
        },
        covid:{
            type:Boolean,
            required:true
        }
    });

// create and export model
module.exports = mongoose.model("patientModel", patientSchema);