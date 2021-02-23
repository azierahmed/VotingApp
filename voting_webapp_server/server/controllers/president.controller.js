const President = require("../models/president.model");

module.exports.createPresident = (request, response) => {
    President.create(request.body)
        .then(newPresident=> response.json(newPresident))
        .catch(err => response.status(400).json(err))
};

module.exports.findAllPresidents = (request, response) => {
    President.find()
        .then(allPresidents => response.json(allPresidents))
        .catch(err => response.json(err))
};

module.exports.findPresident = (request, response) => {
    President.find({_id: request.params.id})
        .then(foundPresident => response.json(foundPresident))
        .catch(err => response.json(err))
};

module.exports.updatePresident = (request, response) => {
    President.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators: true})
        .then(updatedPresident => response.json(updatedPresident))
        .catch(err => response.json(err))
};

module.exports.deletePresident = (request, response) => {
    President.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
};