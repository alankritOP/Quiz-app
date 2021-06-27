require( './data/init' );
const express = require( 'express' );
const path = require( 'path' );
const PORT = process.env.PORT || 3000;
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const app = express();

app.use( express.json() );
app.use( express.urlencoded({ extended: false }) );

app.use('/api/auth',authRouter);
app.use('/api/users',usersRouter);

app.listen( PORT,( error ) => {
    if( error ){
        return console.error( "Error running on this Port" );
    }
    console.log( `Server is running on http://localhost:${ PORT }` );
    
})



