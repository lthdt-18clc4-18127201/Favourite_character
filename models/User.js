const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    email: {
        type:String,
        require: [true, 'Please fill in this blank'],
        unique: true,
        trim: true,
        maxlength: 30,
    },
    password: {
        type: String,
        require: [true, `This can't be blank`],
        maxlength: 30,
    },
    role: {
        type: String,
        require: true,
    }
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);