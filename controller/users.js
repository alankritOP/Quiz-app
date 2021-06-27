const mongoose = require( 'mongoose' );

const User = mongoose.model('User')

function getUsers(req,res,next){
    User.
        find()
        .sort( 'email' )
        .then(data=>{
            res.status(201).json(data);
        })
        .catch((error)=>{
            res.send(error);
        })
}

module.exports = {
    getUsers
};