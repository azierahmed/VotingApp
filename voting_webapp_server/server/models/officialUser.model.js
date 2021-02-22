const mongoose = require('mongoose');

const OfficialUserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required"],
        minLength: [2, "First Name must be at least 2 characters long"]
    },
    lastName: {
        type: String,
        required: [true, "Last Name is required"],
        minLength: [2, "Last Name must be at least 2 characters long"]
    },
    ID: {
        type: Number,
        required: [true, "ID is required"],
        min: [2, "ID must be at 10 numbers long"]
    },
    registrationNumber: {
        type: Number,
        required: [true, "Registration Number is required"],
        min: [6, "Registration Number must be 6 numbers long"]
    },
    gender: {
        type: String,
        required: [true, "Gender is required"],
        minLength: [2, "Gender must be at least 2 characters long"]
    },
    district: {
        type: String,
        required: [true, "District is required"],
        minLength: [2, "District must be at least 2 characters long"]
    },
    legislativeVote:{
            candidate: {
                type: String,
                default: "Undecided"
            }
        ,
        partyList:{
            type: String,
            default: "Undecided"
        }
    },
    presidentialVote: {
        candidate: {
            type: String,
            default: "Undecided"
        },
        partyList:{
            type: String,
            default: "Undecided"
        }
    }
}, {timestamps: true});

const OfficialUser = mongoose.model('OfficialUser', OfficialUserSchema);

module.exports = OfficialUser;