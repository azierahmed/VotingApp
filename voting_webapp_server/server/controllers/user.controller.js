const User = require("../models/user.model");

// const { User } = require('../models/user.model');
const jwt = require("jsonwebtoken");
const bcrypt = require ('bcrypt');
module.exports.register = (req, res) => {
    User.create(req.body)
    .then(user => {

        const userToken = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY);
        

        res
            .cookie("usertoken", userToken, secret, {
                httpOnly: true
            })
            .json({ msg: "success!", user: user });
    })
    .catch(err => res.status(400).json(err));
}

module.exports.login = async(req, res) => {
    const user = await User.findOne({ ID: req.body.ID });
    
    if(user === null) {
        // email not found in users collection
        return res.sendStatus(400);
    }
    
    // if we made it this far, we found a user with this email address
    // let's compare the supplied password to the hashed password in the database
    const correctPassword = await bcrypt.compare(req.body.password, user.password);
    
    if(!correctPassword) {
        // password wasn't a match!
        return res.sendStatus(400);
    }
    
    // if we made it this far, the password was correct
    const userToken = jwt.sign({
        id: user._id
    }, process.env.SECRET_KEY);
    
    // note that the response object allows chained calls to cookie and json
    res
        .cookie("usertoken", userToken, "secret", {
            httpOnly: true
        })
        .json({ msg: "success!", user: user });
}

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

module.exports.logout = (req, res) => {
    res.clearCookie('usertoken');
    res.sendStatus(200);
}