const mongoose = require( 'mongoose' );


const topicSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
        sparse:true
    },
    maxMarks:{
        type:Number,
        required:true
    },
    totalQuestions:{
        type:Number,
        required:true
    }
});

mongoose.model('Topic',topicSchema);
