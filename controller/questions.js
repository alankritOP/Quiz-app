const mongoose = require( 'mongoose' );

const Question = mongoose.model( 'Question' );

const addQuestions = ( req,res,next ) => {
    const newQuestion = req.body;
    if(!newQuestion || Object.keys(newQuestion).length ===0){
        const error = new Error(' Question details is Missing')
        error.status = 400;
        return next(error);
    }
    Question
           .create(newQuestion)
           .then((data)=>{
               res.status(201).json(data);
           })
           .catch( error => {
               error.status = 500;
               return next(error);
           })
}

const getQuestionsById = ( req,res,next ) => {
    const the_topic_id = req.params.id;
    Question.
        find({topicId:the_topic_id})
        .then(data=>{
            res.status(201).json(data);
        })
        .catch((error)=>{
            error.status = 500;
            return next( error );
        })
}


const getMarks = ( req,res,next ) => {
    var count=0;
    console.log(req.body);
    const {answers,questions} = req.body;
    for(let i=0;i<answers.length;i++){
        let k=answers[i] + 1;
        if(k===questions[i].answer){
            count=count+1;
        }
    }
    console.log(count);
    let op=count.toString();
    res.status(201).send(op);
}


module.exports = {
    addQuestions,
    getQuestionsById,
    getMarks
}




