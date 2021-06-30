const mongoose = require('mongoose');
const Topic = mongoose.model('Topic');

const addTopics = (req,res,next) => {
    const newTopic = req.body;
    if(!newTopic || Object.keys(newTopic).length===0){
        const error = new Error( 'Topic Details is required' );
        error.status = 400;
        return next(error);
    }
    Topic
         .create(newTopic)
         .then( (data) => {
             res.status(201).json(data);
         })
         .catch( error =>{
             error.status = 500;
             return next(error);
         })
}


function getTopics(req,res,next){
    Topic.
        find()
        .then(data=>{
            res.status(201).json(data);
        })
        .catch((error)=>{
            res.send(error);
        })
}

module.exports = {addTopics,getTopics};
