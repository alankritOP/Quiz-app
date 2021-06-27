const mongoose = require( 'mongoose' );

const questionSchema = new mongoose.Schema({
    topicId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true

    },
    question:{
        type:String,
        required:true
    },
    choices:[ String ],
    answer:{
        type:Number,
        required:true
    }
});

mongoose.model('Question',questionSchema);