const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
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
        min: [10, "ID must be at 10 numbers long"]
    },
    registrationNumber: {
        type: Number,
        required: [true, "Registration Number is required"],
        min: [6, "Registration Number must be at 6 numbers long"]
    },
    phoneNumber: {
        type: Number,
        required: [true, "Phone Number is required"],
        min: [10, "Phone Number must be at 7 numbers long"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    },
    logged: false,
    admin: false
}, {timestamps: true});

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

const User = mongoose.model('User', UserSchema);

module.exports = User;