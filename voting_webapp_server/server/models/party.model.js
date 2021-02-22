const mongoose = require('mongoose');

const PartySchema = new mongoose.Schema({
    candidateName: {
        type: String,
        required: [true, "First Name is required"],
        minLength: [2, "Name must be at least 2 characters long"]
    },
    listName: {
        type: String,
        required: [true, "List Name is required"],
        minLength: [2, "List Name must be at least 2 characters long"]
    }
}, {timestamps: true});

const Party = mongoose.model('Party', PartySchema);

module.exports = Party;