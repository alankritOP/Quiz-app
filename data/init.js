const mongoose = require( 'mongoose' );

require('../model/User');

const uri = 'mongodb://localhost:27017/meetingsDB';

mongoose.connect( uri, { useNewUrlParser: true, useUnifiedTopology: true } );

mongoose.connection.on( 'open', () => {
    console.log( "Congrats! You are connected to the database" );
});

mongoose.connection.on( 'error', ( err ) => {
    console.error( err.message );
    process.exit( 1 );
});
