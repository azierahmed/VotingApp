const Party = require("../models/party.model");

module.exports.createParty = (request, response) => {
    Party.create(request.body)
        .then(newUser => response.json(newUser))
        .catch(err => response.status(400).json(err))
};

module.exports.findAllParties = (request, response) => {
    Party.find()
        .then(allParties => response.json(allParties))
        .catch(err => response.json(err))
};

module.exports.findParty = (request, response) => {
    Party.find({_id: request.params.id})
        .then(foundParty => response.json(foundParty))
        .catch(err => response.json(err))
};

module.exports.updateParty = (request, response) => {
    Party.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators: true})
        .then(updatedParty => response.json(updatedParty))
        .catch(err => response.json(err))
};

module.exports.deleteParty = (request, response) => {
    Party.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
};