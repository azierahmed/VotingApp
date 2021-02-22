const mongoose = require('mongoose');

const DistrictSchema = new mongoose.Schema({
    districtName: {
        type: String,
        required: [true, "District Name is required"],
        minLength: [2, "District Name must be at least 2 characters long"]
    },
    population: {
        type: Number,
        required: [true, "Population is required"],
        min: [1, "Population must be at least 1 or above"]
    }
}, {timestamps: true});

const District = mongoose.model('District', DistrictSchema);

module.exports = District