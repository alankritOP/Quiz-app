require( './data/init' );
const express = require( 'express' );
const cors = require('cors');
const path = require( 'path' );
const PORT = process.env.PORT || 3000;
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const topicRouter = require('./routes/topic');
const questionRouter = require( './routes/question' );

const app = express();
app.use( cors() );
app.use( express.json() );
app.use( express.urlencoded({ extended: false }) );

app.use('/auth',authRouter);
app.use('/users',usersRouter);
app.use('/topics',topicRouter);
app.use( '/questions',questionRouter);

app.listen( PORT,( error ) => {
    if( error ){
        return console.error( "Error running on this Port" );
    }
    console.log( `Server is running on http://localhost:${ PORT }` );
    
})



