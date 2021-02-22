const User = require("../models/user.model");

module.exports.createUser = (request, response) => {
    User.create(request.body)
        .then(newUser => response.json(newUser))
        .catch(err => response.status(400).json(err))
};

module.exports.findAllUsers = (request, response) => {
    User.find()
        .then(allUsers => response.json(allUsers))
        .catch(err => response.json(err))
};

module.exports.findUser = (request, response) => {
    User.find({_id: request.params.id})
        .then(foundUser => response.json(foundUser))
        .catch(err => response.json(err))
};

module.exports.updateUser = (request, response) => {
    User.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators: true})
        .then(updatedUser => response.json(updatedUser))
        .catch(err => response.json(err))
};

module.exports.deleteUser = (request, response) => {
    User.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
};

module.exports.findAllLoggedUser = (request, response) => {
    User.find({logged: true})
        .then(allLoggedUsers => response.json(allLoggedUsers))
        .catch(err => response.json(err))
};