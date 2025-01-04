const mongoose = require('mongoose');

const invitationSchema2 = new mongoose.Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique:true
    },
    number: {
        type:Number,
        required: true
    },
    
    message: {
        type: String,
        required:true,
    }
}, {
    timestamps:true,
});

const Invitation2 = mongoose.model('Invitation2', invitationSchema2);
module.exports = Invitation2;
